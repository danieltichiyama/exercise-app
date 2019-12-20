const express = require("express");
const workoutRouter = express.Router();

workoutRouter.route("/").get((req, res) => {
  return req.db.Workout.fetchAll({
    withRelated: [
      "exercisesUsersWorkouts",
      "exercisesUsersWorkouts.user_id"
    ]
  }).then(response => {
    return res.json(response);
  });
});

module.exports = workoutRouter;
