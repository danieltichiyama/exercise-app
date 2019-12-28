const express = require("express");
const communityCommentsRouter = express.Router();

communityCommentsRouter
  .route("/")
  .get((req, res) => {
    return req.db.CommunityComment.fetchAll()
      .then(response => {
        return res.json(response);
      })
      .catch(err => {
        console.log("Error in communityCommentsRouter GET: ", err);
      });
  })
  .post((req, res) => {
    let newComment = req.body;
    return req.db.CommunityComment.forge(newComment)
      .save()
      .then(response => {
        return res.json(response);
      })
      .catch(err => {
        console.log("Error in communityCommentRouter POST: ", err);
        return res.status(500).send({ message: "Error adding comment." });
      });
  })
  .delete((req, res) => {
    let commentID = req.body.data;
    return req.db.CommunityComment.forge({ id: commentID })
      .destroy()
      .then(() => {
        res.send({
          message: `Deletion of comment with ID: ${commentID} successful`
        });
      })
      .catch(err => {
        console.log("Error in communityCommentRouter DELETE: ", err);
      });
  });

module.exports = communityCommentsRouter;
