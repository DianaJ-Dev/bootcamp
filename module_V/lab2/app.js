var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var productRouter = require('./routes/product')


var baseApiPath = '/api/';
var apiVersion = 'v1';
var usersPath = '/users';
var authPath = "/auth";
var productPath = "/product"



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(baseApiPath + apiVersion + usersPath , usersRouter);
app.use(baseApiPath + apiVersion + productPath, productRouter );
app.use(baseApiPath + apiVersion + authPath, authRouter);

module.exports = app;
