var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json);

// SET STORAGE

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

app.post(
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
  // // view engine setup
  // app.set('views', path.join(__dirname, 'views'));
  // app.set('view engine', 'jade');

  // app.use(logger('dev'));
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: false }));
  // app.use(cookieParser());
  // app.use(express.static(path.join(__dirname, 'public')));

  // app.use('/', indexRouter);
  // app.use('/users', usersRouter);

  // // catch 404 and forward to error handler
  // app.use(function(req, res, next) {
  //   next(createError(404));
  // });

  // // error handler
  // app.use(function(err, req, res, next) {
  //   // set locals, only providing error in development
  //   res.locals.message = err.message;
  //   res.locals.error = req.app.get('env') === 'development' ? err : {};

  //   // render the error page
  //   res.status(err.status || 500);
  //   res.render('error');
  // });
);
module.exports = app;
