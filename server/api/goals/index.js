const express = require('express');
const goalsRouter = express.Router();

goalsRouter.route("/")
    .get((req, res) => {
        return req.db.Goal.fetchAll()
        .then(response => {
            return res.json(response);
        })
    })

module.exports = goalsRouter;