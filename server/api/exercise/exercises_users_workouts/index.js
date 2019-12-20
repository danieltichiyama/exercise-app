const express = require('express');
const exercisesUsersWorkoutsRouter = express.Router();

exercisesUsersWorkoutsRouter.route("/")
    .get((req, res) => {
        return req.db.ExerciseUserWorkout.fetchAll({
            withRelated: [
                "workouts_id",
                "exercises_id",
                "user_id"
            ]
        })
            .then(response => {
                return res.json(response);
            })
    })

module.exports = exercisesUsersWorkoutsRouter;