var express = require('express');
var router = require('./routes/routes.js');
var commonPath = require('../build-utils/common-path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', commonPath.outputPath);
app.use(express.static(commonPath.outputPath));

app.use('/', router);

module.exports = app;