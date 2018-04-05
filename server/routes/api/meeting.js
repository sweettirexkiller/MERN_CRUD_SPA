var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Meeting = require('../../../models/Meeting');

/* GET ALL MEETINGS */
router.get('/', function (req, res, next) {
    Meeting.find(function (err, meetings) {
        if (err) return next(err);
        res.json(meetings);
    });
});

/* GET SINGLE MEETING BY ID */
router.get('/:id', function (req, res, next) {
    Meeting.findById(req.params.id, function (err, meeting) {
        if (err) return next(err);
        res.json(meeting);
    });
});

/* SAVE MEETING */
router.post('/', function (req, res, next) {
    Meeting.create(req.body, function (err, meeting) {
        if (err) return next(err);
        res.json(meeting);
    });
});

/* UPDATE MEETING */
router.put('/:id', function (req, res, next) {
    Meeting.findByIdAndUpdate(req.params.id, req.body, function (err, meeting) {
        if (err) return next(err);
        res.json(meeting);
    });
});

/* DELETE MEETING */
router.delet ('/:id', function (req, res, next) {
    Meeting.findByIdAndRemove(req.params.id, req.body, function (err, meeting) {
        if (err) return next(err);
        res.json(meeting);
    });
});

module.exports = router;