const express = require('express');
const communityCommentsRouter = express.Router();

communityCommentsRouter.route("/:id")
    .get((req, res) => {
        return req.db.CommunityComment.where({ community_post_id: req.params.id }).fetchAll({
            withRelated: [
                "user_id",
                "community_post_id"
            ]
        })
            .then(response => {
                return res.json(response);
            })
            .catch(err => {
                console.log("Error in communityCommentsRouter: ", err);
            })
    })


module.exports = communityCommentsRouter;