var express = require('express');
var config = require('../config/config');

var router = require('./routes/routes.js');
var meeting = require('./routes/api/meeting.js');

var commonPath = require('../config/webpack/common-path');

var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

app.set('view engine', 'ejs');
app.set('views', commonPath.outputPath);
app.use(express.static(commonPath.outputPath));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

mongoose.connect(config.DB_CLIENT, {promiseLibrary: require('bluebird')})
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

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
    res.send(err.message);
});

module.exports = app;