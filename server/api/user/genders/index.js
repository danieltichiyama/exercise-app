const express = require('express');
const genderRouter = express.Router();

genderRouter.route("/")
    .get((req, res) => {
        return req.db.Gender.fetchAll()
        .then(response => {
            return res.json(response);
        })
    })

module.exports = genderRouter;