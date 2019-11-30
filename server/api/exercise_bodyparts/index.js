const express = require("express");
const exerciseBodypartRouter = express.Router();

exerciseBodypartRouter.route("/").get((req, res) => {
  return req.db.ExerciseBodypart.fetchAll({
    withRelated: [
      "exercise_id",
      "bodypart_id"
    ]
  }).then(response => {
    return res.json(response);
  });
});

module.exports = exerciseBodypartRouter;
