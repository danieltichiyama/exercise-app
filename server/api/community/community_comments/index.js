const express = require('express');
const communityCommentsRouter = express.Router();

communityCommentsRouter.route("/")
    .get((req, res) => {
        return req.db.CommunityComment.fetchAll({
            withRelated: [
                "user_id",
                "community_post_id"
            ]
        })
        .then(response => {
            return res.json(response);
        })
    })

module.exports = communityCommentsRouter;