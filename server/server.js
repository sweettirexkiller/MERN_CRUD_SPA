var express = require('express');
var router = require('./routes/routes.js');
var commonPath = require('../build-utils/common-path');

var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('views', commonPath.outputPath);
app.use(express.static(commonPath.outputPath));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended : false}));

mongoose.connect('mongodb://localhost/MyApp');

app.use('/', router);

module.exports = app;