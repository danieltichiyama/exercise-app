const express = require("express");
const videoUploadRouter = express.Router();
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require('path');
const url = require('url');
const aws = require("aws-sdk");


require("dotenv").config();


const s3 = new aws.S3({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  Bucket: "fitworks-videos"
})

const exerciseTutorialVideoUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "fitworks-videos",
    acl: "public-read",
    key: function (req, file, cb){
      cb(null, path.basename( file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname));
    }
  }),
  limits: {fileSize: 250000000},
  fileFilter: function( req, file, cb ){
    checkFileType(file, cb);
  }
}).single('exerciseVideo');

function checkFileType( file, cb ){
  // Allowed ext
  const filetypes = /avi|flv|mkv|mov|mp4|webm|wmv|video|x-matroska/;
  // Check ext
  const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
  // Check mime
  const mimetype = filetypes.test( file.mimetype );
  if( mimetype && extname ){
    return cb( null, true );
  } else {
    cb( 'Error: Videos Only!' );
  }
}

videoUploadRouter.post('/', (req, res) => {
  exerciseTutorialVideoUpload( req, res, (error) => {
    if (error){
      console.log('errors', error);
      res.json({ error: error });
    } else {
      //if file not found
      if(req.file === undefined){
        console.log('Error: No File Selected!');
        res.json('Error: No File Selected!');
      } else {
        //success
        const imageName = req.file.key;
        const imageLocation = req.file.location;
        //save file name into database
        res.json({
          image: imageName,
          location: imageLocation
        })
      }
    }
  })
});


module.exports = videoUploadRouter;
