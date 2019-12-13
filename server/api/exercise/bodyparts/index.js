const express = require('express');
const bodypartsRouter = express.Router();

bodypartsRouter.route("/:id")
    .get((req, res) => {
        let newID = parseInt(req.params.id);
        return req.db.Bodypart.where({ id: newID })
            .fetchAll({
                withRelated: [
                    "exercises"
                ]
            })
            .then(response => {
                return res.json(response);
            })
            .catch(err => {
                console.log("Error in bodypartsRouter get '/:id' : ", err);
            })
    })

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
            .catch(err => {
                console.log("Error in bodypartsRouter get '/' : ", err);
            })
    })

module.exports = bodypartsRouter;