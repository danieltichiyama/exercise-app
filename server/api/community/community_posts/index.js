const express = require('express');
const communityPostsRouter = express.Router();

communityPostsRouter.route("/")
    .get((req, res) => {
        return req.db.CommunityPost.fetchAll({
            withRelated: [
                "user_id",
                "user_video_id",
                "food_images_id",
                "exercise_id"
            ]
        })
        .then(response => {
            return res.json(response);
        })
    })

module.exports = communityPostsRouter;