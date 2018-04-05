var express = require('express');

var router = require('./routes/routes.js');
var meeting = require('./routes/api/meeting.js');

var commonPath = require('../build-utils/common-path');

var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('views', commonPath.outputPath);
app.use(express.static(commonPath.outputPath));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

mongoose.connect('mongodb://localhost/MyApp');

app.use('/', router);
app.use('/api/meeting', meeting);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};
   res.status(err.status || 500);
   res.render('error');
});

module.exports = app;