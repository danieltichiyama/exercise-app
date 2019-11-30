const express = require('express');
const exercisesRouter = express.Router();

exercisesRouter.route("/")
    .get((req, res) => {
        return req.db.Exercise.fetchAll({
            withRelated: [
                "primary_bodypart_id",
                "exercise_type_id",
                "exercise_difficulty_id",
                "exercise_equipment_id",
                "bodyparts",
                "workouts"
            ]
        })
        .then(response => {
            return res.json(response);
        })
    })

module.exports = exercisesRouter;