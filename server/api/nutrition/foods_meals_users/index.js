const express = require("express");
const foodMealUserRouter = express.Router();
const moment = require("moment");

foodMealUserRouter.route("/new").post((req, res) => {
  // console.log("server works");
  console.log(req.body);
  return req.db.FoodMealUser.forge(req.body)
    .save()
    .then(response => {
      console.log("server response: ", response);
      return res.json(response);
    })
    .catch(err => {
      console.log("error in addFood", err);
      return res.status(500).send({ message: "error" });
    });
});

foodMealUserRouter
  .route("/")
  .get((req, res) => {
    console.log("foodMealUserRouter");
    return req.db.FoodMealUser.fetchAll()
      .then(response => {
        return res.json(response);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .post((req, res) => {
    let date = new Date(new Date(req.body.date).toISOString().slice(0, 10));
    let nextDay = moment(date).add(1, "day");

    return req.db.FoodMealUser.query(qb => {
      return qb
        .select()
        .where("user_id", req.body.session.id)
        .whereBetween("created_at", [date, nextDay]);
    })
      .fetchAll({ withRelated: ["meal_type_id"] })
      .then(response => {
        if (response) {
          return res.json(response);
        } else {
          return res.json([]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  });

module.exports = foodMealUserRouter;
