const express = require("express");
const tutorialVideoRouter = express.Router();

tutorialVideoRouter.route("/").get((req, res) => {
  return req.db.TutorialVideo.fetchAll({
    withRelated: ["exercise_id"]
  }).then(response => {
    return res.json(response);
  });
});

module.exports = tutorialVideoRouter;
