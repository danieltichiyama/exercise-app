const express = require('express');
const communityPostsRouter = express.Router();

communityPostsRouter.route("/")
    .get((req, res) => {
        return req.db.CommunityPost.fetchAll({
            withRelated: [
                "user_id",
                "user_video_id",
                "food_images_id",
                "exercise_id",
                "community_comment_id.user_id.goal_id",
                //references community_comment_id from the CommunityPost Model, then references user_id from CommunityComment Model. (chainable)
            ]
        })
            .then(response => {
                return res.json(response);
            })
    })

module.exports = communityPostsRouter;