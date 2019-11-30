const express = require("express");
const userVideoRouter = express.Router();

userVideoRouter.route("/").get((req, res) => {
  return req.db.UserVideo.fetchAll({
    withRelated: [
        "user_id",
        "exercise_id"
    ]
  }).then(response => {
    return res.json(response);
  });
});

module.exports = userVideoRouter;
