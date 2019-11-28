const express = require("express");
const foodImageRouter = express.Router();

foodImageRouter.route("/").get((req, res) => {
  return req.db.FoodImage.fetchAll({
    withRelated: ["foods_meals_users_id"]
  }).then(response => {
    return res.json(response);
  });
});

module.exports = foodImageRouter;
