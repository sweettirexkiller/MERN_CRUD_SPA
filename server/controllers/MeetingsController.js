var Meeting = require('../../models/Meeting');

exports.index = function (req, res, next) {
    Meeting.find(function (err, meetings) {
        if (err) return next(err);
        res.json(meetings);
    });
};

exports.show = function (req, res, next) {
    Meeting.findById(req.params.id, function (err, meeting) {
        if (err) return next(err);
        res.json(meeting);
    })
};



exports.store = function (req, res, next) {
    Meeting.create(req.body, function (err, meeting) {
        if (err) return next(err);
        res.json(meeting);
    });
};


exports.update = function (req, res, next) {
    Meeting.findByIdAndUpdate(req.params.id, req.body, function (err, meeting) {
        if (err) return next(err);
        res.json(meeting);
    });
};

exports.destroy = function (req, res, next) {
    Meeting.findByIdAndRemove(req.params.id, req.body, function (err, meeting) {
        if (err) return next(err);
        res.json(meeting);
    });
};