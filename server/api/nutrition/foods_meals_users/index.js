const express = require("express");
const foodMealUserRouter = express.Router();

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
    let date = new Date(req.body.date).toISOString();
    console.log("req.body.date", req.body.date);
    console.log("foodMealUser POST", date);
    return req.db.FoodMealUser.query(qb => {
      return qb
        .select("fmu.*")
        .from("foods_meals_users as fmu")
        .whereRaw("DATE_TRUNC('day', created_at)=DATE_TRUNC('day', ?);", [
          date
        ]);
    })
      .fetchAll()
      .then(response => {
        if (response) {
          return res.json(response);
        } else {
          return res.json([]);
        }
      });
  });

module.exports = foodMealUserRouter;
