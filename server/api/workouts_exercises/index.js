const express = require('express');
const workoutsExercisesRouter = express.Router();

workoutsExercisesRouter.route("/")
    .get((req, res) => {
        return req.db.WorkoutExercise.fetchAll({
            withRelated: [
                "workouts_id",
                "exercises_id"
            ]
        })
        .then(response => {
            return res.json(response);
        })
    })

module.exports = workoutsExercisesRouter;