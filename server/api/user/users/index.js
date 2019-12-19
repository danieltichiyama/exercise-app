const express = require("express");
const usersRouter = express.Router();

usersRouter
  .route("/:id")
  .get((req, res) => {
    return req.db.User.where({ id: req.params.id })
      .fetch({
        withRelated: [
          "gender_id",
          "activity_level_id",
          "user_tier_id",
          "goal_id",
          "workout_id"
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
    return console.log("req params::::", req.params);
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
    withRelated: [
      "gender_id",
      "activity_level_id",
      "user_tier_id",
      "goal_id",
      "workout_id"
    ]
  }).then(response => {
    return res.json(response);
  });
});

module.exports = usersRouter;
