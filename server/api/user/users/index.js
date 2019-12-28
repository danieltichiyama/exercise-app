const express = require("express");
const usersRouter = express.Router();
//calculatorModule
const calculator = require("../../../util/calculators");
const User = require("../../../database/models/User");
usersRouter
  .route("/:id")
  .get((req, res) => {
    return req.db.User.where({ id: req.params.id })
      .fetch({
        withRelated: [
          "gender_id",
          "activity_level_id",
          "user_tier_id",
          "goal_id"
        ]
      })
      .then(response => {
        return res.json(response);
      })
      .catch(error => {
        console.log("Error:", error);
        res.status(404).send({ message: "User not found." });
      });
  })
  .put((req, res) => {
    return req.db.User.where({ id: req.params.id })
      .save(req.body, { method: "update", patch: true })
      .then(user => {
        return user.toJSON();
      })
      .then(results => {
        return new User()
          .where({ id: results.id })
          .fetch({
            withRelated: ["gender_id", "activity_level_id", "goal_id"]
          })
          .then(user => {
            return user.toJSON();
          })
          .then(results => {
            let recommended_calories = calculator.recommendedCalories(results);
            return new User()
              .where({ id: results.id })
              .save({ recommended_calories }, { method: "update", patch: true })
              .then(user => {
                return req.db.User
                  .where({ id: req.params.id })
                  .fetch({
                    withRelated: ["gender_id", "activity_level_id", "goal_id"]
                  })
                  .then(user => {
                    return res.json(user);
                  })
                  .catch(err => {
                    console.log(err);
                    return res
                      .status(500) //"Conflict error code"
                      .json({
                        message: "Cannot edit user info."
                      });
                  });
              });
          });
      });
  });
usersRouter.route("/emails").post((req, res) => {
  return req.db.User.where({ email: req.body.email })
    .fetch({
      columns: ["email"]
    })
    .then(response => {
      return res.json(response);
    })
    .catch(error => {
      return res.send("");
    });
});
//not sure if we need this route, but i'll leave it for now.
usersRouter.route("/").get((req, res) => {
  return req.db.User.fetchAll({
    withRelated: ["gender_id", "activity_level_id", "user_tier_id", "goal_id"]
  }).then(response => {
    return res.json(response);
  });
});
module.exports = usersRouter;