const express = require("express");
const axios = require("axios");
const fatSecretRouter = express.Router();
const request = require("request");
const clientID = process.env.REACT_APP_FAT_SECRET_CLIENT_ID;
const clientPW = process.env.REACT_APP_FAT_SECRET_CLIENT_SECRET;
const FatSecret = require("../../../database/models/FatSecret");
let timer;

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
  
function setToken(){
  let token;
  return {
    refreshToken: function refreshToken(obj){
      token = obj;
      return token
    },
    getToken: function getToken(){
      return token;
    }
  }
} 

let tokenClosure = setToken();

let fatSecretApi = () => {
  new FatSecret()
  .fetchAll()
  .then(async response => {
    //check if oauth token data table is empty
    if (response.length === 0){
      //if oauth token data table is empty get new token
      request(options, function (error, response, body) {
        if (error) {
          throw new Error(error);
        } else {
          tokenClosure.refreshToken(body);
          new FatSecret({
            Oauth2Token: body.access_token,
            expires_in: body.expires_in
          })
          .save()
          .then(() => {
            //set timer to refresh token;
            timer = setInterval(() => {
              fatSecretApi();
            }, 82,800,000)
          });
        };
      });
    } else {
      //if oauthtoken table not empty delete it
      new FatSecret()
      .where({
        Oauth2Token: tokenClosure.getToken().access_token
      })
      .destroy()
      //stop timer then re run function
      .then(() => {
        clearInterval(timer);
        fatSecretApi();
      })
    }
  })
}

fatSecretApi();

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

module.exports = fatSecretRouter;