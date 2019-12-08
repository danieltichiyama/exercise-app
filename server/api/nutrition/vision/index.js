const express = require("express");
const vision = require('@google-cloud/vision');
const multer = require("multer");
const path = require('path');
const visionRouter = express.Router();
const keyFilename = './fitworks.json'
const upload = multer({ storage: multer.memoryStorage() });

visionRouter.post("/", upload.single("foodImage"), (req, res) => {
  async function quickstart(){
    // Imports the Google Cloud client library
    // Creates a client
    const client = new vision.ImageAnnotatorClient({ keyFilename });
    // Performs label detection on the image file
    const [result] = await client.labelDetection(req.file.buffer);
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  }
  quickstart();
})

module.exports = visionRouter;