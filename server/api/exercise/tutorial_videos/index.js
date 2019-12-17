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
    console.log(req.body);
    return req.db.TutorialVideo.forge(req.body)
    .save()
    .then(results => {
      console.log('VIDEO POST', results);
      res.status(200).json(results)
    })
    .catch(err => {
      res.send(err);
    })
  }
)

module.exports = tutorialVideoRouter;
  