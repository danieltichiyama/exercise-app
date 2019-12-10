const express = require('express');
const mealTypesRouter = express.Router();

mealTypesRouter.route("/")
  .get((req, res) => {
    return req.db.MealType.fetchAll()
    .then(response => {
      return res.json(response);
    })
  })

module.exports = mealTypesRouter;