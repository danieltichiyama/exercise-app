const express = require('express');
const communityCommentsRouter = express.Router();

communityCommentsRouter.route("/")
    .get((req, res) => {
        return req.db.CommunityComment.fetchAll()
            .then(response => {
                return res.json(response);
            })
            .catch(err => {
                console.log("Error in communityCommentsRouter: ", err);
            })
    })
    .post((req, res) => {
        let newComment = req.body;
        return req.db.CommunityComment.forge(newComment)
            .save()
            .then(response => {
                console.log("OK")
                return res.json(response);
            })
            .catch(err => {
                console.log("Error in communityCommentRoute: ", err);
                return res.status(500).send({ message: "Error adding comment." });
            })
    })

module.exports = communityCommentsRouter;