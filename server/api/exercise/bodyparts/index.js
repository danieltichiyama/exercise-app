const express = require('express');
const bodypartsRouter = express.Router();

bodypartsRouter.route("/")
    .get((req, res) => {
        return req.db.Bodypart.fetchAll({
            withRelated: [
                "exercises",
                "muscle_group_id"
            ]
        })
        .then(response => {
            return res.json(response);
        })
    })

module.exports = bodypartsRouter;