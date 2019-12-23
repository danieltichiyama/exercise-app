const express = require("express");
const tutorialVideoRouter = express.Router();

tutorialVideoRouter.route("/")
  .get((req, res) => {
    return req.db.TutorialVideo.fetchAll({
        withRelated: ["exercise_id"]
      }).then(response => {
        return res.json(response);
      });
    }
  )
  .post((req, res) => {
    return req.db.TutorialVideo.forge(req.body)
    .save()
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err => {
      res.send(err);
    })
  }
)

module.exports = tutorialVideoRouter;
  