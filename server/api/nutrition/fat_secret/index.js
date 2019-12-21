const express = require("express");
const axios = require("axios");
const fatSecretRouter = express.Router();
const request = require("request");
const clientID = process.env.REACT_APP_FAT_SECRET_CLIENT_ID;
const clientPW = process.env.REACT_APP_FAT_SECRET_CLIENT_SECRET

var options = {
   method: 'POST',
   url: 'https://oauth.fatsecret.com/connect/token',
   auth : {
      user : clientID,
      password : clientPW
   },
   headers: { 'Content-Type': 'application/json'},
   form: {
      'grant_type': 'client_credentials',
      'scope' : 'basic'
   },
   json: true
};

fatSecretRouter.route("/")
.get((req, res) => {
  request(options, function (error, response, body) {
    if (error) {
      throw new Error(error);
    } else {
      res.send(body);
    }
  });
})
.post((req, res) => {
  console.log('yoyoyoyoyoyo', req.body.data);
  return req.db.FatSecret.forge({
    Oauth2Token: req.body.access_token,
    expires_in: req.body.expires_in
  })
  .save()
})

module.exports = fatSecretRouter;