const express = require('express');
const axios = require("axios");
const nutritionRouter = express.Router();
const foodSearchEndpoint = `https://api.nal.usda.gov/fdc/v1/search?api_key=${process.env.API_KEY}`;

nutritionRouter.route("/")
  .get((req, res) => {
    return axios({
      method: 'get',
      url: 'https://api.nal.usda.gov/fdc/v1/340680?api_key=qGgyMH88nSb8gb0JT5ScbvbMN4NhjJP31t8I8vt5',
      headers: { 
        "Content-Type": "application/json"
      }
    }).then((response) => {
      return res.json(response.data)
    })
  })
  .post((req, res) => {
    return axios({
      method: 'post',
      url: foodSearchEndpoint,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        "generalSearchInput": req.body.data,
        "includeDataTypes": {
          "Survey (FNDDS)": true,
        },
      }
    }).then((response) => {
      return res.json(response.data);
    })
  });

module.exports = nutritionRouter