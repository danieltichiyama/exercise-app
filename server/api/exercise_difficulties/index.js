const express = require('express');
const exerciseDifficulties = express.Router();

exerciseDifficulties.route("/")
    .get((req, res) => {
        return req.db.ExerciseDifficulty.fetchAll()
        .then(response => {
            return res.json(response);
        })
    })

module.exports = exerciseDifficulties;