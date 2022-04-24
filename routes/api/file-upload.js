const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
debugger
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let dir = `/tmp/myuploads/`;
  
      // check if file path exists or create the directory
      fs.access(dir, function (error) {
        if (error) {
          console.log('Directory does not exist.');
          return fs.mkdir(dir, (error) => cb(error, dir));
        } else {
          console.log('Directory exists.');
          return cb(null, dir);
        }
      });
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
      //added Date.now()
    },
  });
const uploadFiles = multer({ storage: storage });

router.post(
    '/fileupload',
    uploadFiles.single('file'),
    (req, res, next) => {
      const file = req.file;
      if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
      }
  
      res.json({
        success: true,
  
        statusCode: 200,
  
        filename: file.filename,
      });
    }
 
  );  

module.exports = router;
