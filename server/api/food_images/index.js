const express = require("express");
const foodImageRouter = express.Router();

foodImageRouter.route("/").get((req, res) => {
  return req.db.FoodImage.fetchAll({
    withRelated: ["users_id", "meal_type_id"]
  }).then(response => {
    return res.json(response);
  });
});

module.exports = foodImageRouter;
