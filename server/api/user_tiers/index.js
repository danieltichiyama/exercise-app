const express = require('express');
const userTiersRouter = express.Router();

userTiersRouter.route("/")
    .get((req, res) => {
        return req.db.UserTier.fetchAll()
        .then(response => {
            return res.json(response);
        })
    })

module.exports = userTiersRouter;