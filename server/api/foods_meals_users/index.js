const express = require("express");
const foodMealUserRouter = express.Router();

foodMealUserRouter.route("/").get((req, res) => {
  return req.db.FoodMealUser.fetchAll({
    withRelated: [
      "meal_type_id",
      "user_id"
    ]
  }).then(response => {
    return res.json(response);
  });
});

module.exports = foodMealUserRouter;
