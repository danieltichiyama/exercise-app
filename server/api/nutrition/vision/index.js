const express = require("express");
const vision = require('@google-cloud/vision');
const multer = require("multer");
const path = require('path');
const visionRouter = express.Router();
const keyFilename = './server/api/nutrition/vision/fitworks.json'

visionRouter.route("/")
  .post((req, res) => {
    async function quickstart(){
      console.log(req.body.image);
      // Imports the Google Cloud client library
      // Creates a client
      const client = new vision.ImageAnnotatorClient({ keyFilename });
      console.log('1');
      // Performs label detection on the image file
      const [result] = await client.labelDetection(req.body.image);
      const labels = result.labelAnnotations;
      // console.log(result);
      console.log('Labels:');
      labels.forEach(label => console.log(label.description));
    }
    quickstart();
  })

// quickstart();

module.exports = visionRouter;