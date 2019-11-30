const express = require('express');
const activityLevelRouter = express.Router();

activityLevelRouter.route("/")
    .get((req, res) => {
        return req.db.ActivityLevel.fetchAll()
        .then(response => {
            return res.json(response);
        })
    })

module.exports = activityLevelRouter;