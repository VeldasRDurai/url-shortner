var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index');
const create = require('./routes/create');
const search = require('./routes/search');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', index );
app.use('/create', create);
app.use('/search', search);

app.use('/', express.static(path.join(__dirname, 'public/index')));
app.use('/create', express.static(path.join(__dirname, 'public/create')));
app.use('/search', express.static(path.join(__dirname, 'public/search')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
