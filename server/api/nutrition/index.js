const express = require('express');
const axios = require("axios");
const nutritionRouter = express.Router();
const foodSearchEndpoint = `https://api.nal.usda.gov/fdc/v1/search?api_key=${process.env.API_KEY}`;


const formData = 'Lays'

nutritionRouter.route("/")
    .get((req, res) => {
        return axios({
            method: 'post',
            url: foodSearchEndpoint,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                "generalSearchInput": formData
            }
            }).then((response) => {
                return res.json(response.data);
            })
        })

module.exports = nutritionRouter