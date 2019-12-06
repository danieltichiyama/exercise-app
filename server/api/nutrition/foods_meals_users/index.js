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
    console.log("foodMealUser POST", req.body.date);
    return req.db.FoodMealUser.query()
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
