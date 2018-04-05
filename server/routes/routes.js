var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Event = require('../../models/Event');


router.get('/', function (req, res) {
    res.render('index')
});

router.route('/insert')
    .post(function (res, req) {
        var event = new Event();
        event.firstName = req.body.firstName;
        event.lastName = req.body.lastName;
        event.email = req.body.email;
        event.date = req.body.date;

        event.save(function (err) {
            if (err) res.send(err);
            res.send('Expense successfully added!');
        });
    });


module.exports = router;