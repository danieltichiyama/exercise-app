const express = require("express");
const clientID = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const fatSecretRouter = express.Router();

var options = {
   method: 'POST',
   url: 'https://oauth.fatsecret.com/connect/token',
   method : 'POST',
   auth : {
      user : clientID,
      password : clientSecret
   },
   headers: { 'content-type': 'application/json'},
   form: {
      'grant_type': 'client_credentials',
      'scope' : 'basic'
   },
   json: true
};



// request(options, function (error, response, body) {
//    if (error) throw new Error(error);

//    console.log(body);
// });

module.exports = fatSecretRouter;