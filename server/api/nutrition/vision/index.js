const express = require("express");
const vision = require("@google-cloud/vision");
const multer = require("multer");
const path = require("path");
const visionRouter = express.Router();
const keyFilename = "./fitworks.json";
const upload = multer({ storage: multer.memoryStorage() });
const filterArr = [
  "Dish",
  "Food",
  "Ingredient",
  "Fruit",
  "Cuisine",
  "Fast food",
  "Kids' meal",
  "Italian food",
  "Tree",
  "Wood sorrel family",
  "Yellow",
  "Plant",
  "Woody plant",
  "Star"
];

visionRouter.post("/", upload.single("foodImage"), (req, res) => {
  const getLabel = async () => {
    // Imports the Google Cloud client library
    // Creates a client
    const client = new vision.ImageAnnotatorClient({ keyFilename });
    // Performs label detection on the image file
    const [result] = await client.labelDetection(req.file.buffer);
    const labels = result.labelAnnotations;
    const filterLabel = labels.filter(
      label => !filterArr.includes(label.description)
    );
    return filterLabel;
  };
  getLabel()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log("Error in api/nutrition/vision", err);
      return res.json({ data: [{ description: "No matches" }] });
    });
});

module.exports = visionRouter;
