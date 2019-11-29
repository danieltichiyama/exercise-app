const express = require('express');
const muscleGroupsRouter = express.Router();

muscleGroupsRouter.route("/")
    .get((req, res) => {
        return req.db.MuscleGroup.fetchAll()
        .then(response => {
            return res.json(response);
        })
    })

module.exports = muscleGroupsRouter;