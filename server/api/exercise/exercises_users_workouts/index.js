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
            .catch(err => {
                console.log("Error in exercisesUsersWorkoutsRouter get '/' : ", err)
            })
    })
    .post((req, res) => {
        let newWorkout = {
            exercise_duration: req.body.duration,
            calories_burned: req.body.calories_burned,
            user_id: req.body.user_id,
            workout_id: req.body.workout_id,
            exercise_id: req.body.exercise_id
        }
        return req.db.ExerciseUserWorkout.forge(newWorkout)
            .save()
            .then(response => {
                return res.json(response);
            })
            .catch(err => {
                console.log("Error in exercisesUsersWorkoutsRouter post '/' : ", err)
            })
    })

module.exports = exercisesUsersWorkoutsRouter;