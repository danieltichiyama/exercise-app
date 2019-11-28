const express = require('express');
const usersRouter = express.Router();

usersRouter.route("/")
    .get((req, res) => {
        return req.db.User.fetchAll({
            withRelated: [
                "gender_id",
                "activity_level_id",
                "user_tier_id",
                "goal_id"
            ]
        })
        .then(response => {
            return res.json(response);
        })
    })

module.exports = usersRouter;