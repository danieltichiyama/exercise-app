const express = require("express");
const imageUploadRouter = express.Router();
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require('path');
const aws = require("aws-sdk");

const s3 = new aws.S3({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  Bucket: "fitworks-images"
})

const imageUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "fitworks-images",
    acl: "public-read",
    key: function (req, file, cb){
      cb(null, path.basename( file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname));
    }
  }),
  limits: {fileSize: 2000000},
  fileFilter: function( req, file, cb ){
    checkFileType(file, cb);
  }
}).single('imageUpload');

function checkFileType( file, cb ){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
  // Check mime
  const mimetype = filetypes.test( file.mimetype );
  if( mimetype && extname ){
    return cb( null, true );
  } else {
    cb( 'Error: Images Only!' );
  }
}

imageUploadRouter.post('/', (req, res) => {
  imageUpload( req, res, (error) => {
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

imageUploadRouter.post('/check/:id', (req, res) => {
  return req.db.UserPicture.where({
    user_id: req.params.id
  })
  .fetch()
  .then(response => {
    res.json(response)
  })
  .catch(err => {
    res.json(err);
  })
})

imageUploadRouter.post('/:id', (req, res) => {
  return req.db.UserPicture.forge({
    url: req.body.location,
    name: req.body.image,
    user_id: req.params.id
  })
  .save()
  .then(() => {
    return res.status(200);
  })
  .catch(err => {
    return console.log(err);
  })
})

module.exports = imageUploadRouter;