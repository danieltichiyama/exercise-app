const express = require('express');
const exerciseTypesRouter = express.Router();

exerciseTypesRouter.route("/")
    .get((req, res) => {
        return req.db.ExerciseType.fetchAll()
        .then(response => {
            return res.json(response);
        })
    })

module.exports = exerciseTypesRouter;