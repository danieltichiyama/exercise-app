const express = require("express");
const foodMealUserRouter = express.Router();

foodMealUserRouter.route("/:id").get((req, res) => {
  return req.db.FoodMealUser.where({ id: req.params.id })
    .fetch({ withRelated: ["food_image_id", "meal_type_id", "user_id"] })
    .then(response => {
      return res.json(response);
    })
    .catch(error => {
      console.log("Error:", error);
      res.status(404).send({ message: "Data not found." });
    });
});

foodMealUserRouter.route("/").get((req, res) => {
  return req.db.FoodMealUser.fetchAll({
    withRelated: ["food_image_id", "meal_type_id", "user_id"]
  }).then(response => {
    return res.json(response);
  });
});

module.exports = foodMealUserRouter;
