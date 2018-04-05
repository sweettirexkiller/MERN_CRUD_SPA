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

router.route('/update')
    .post(function (req, res) {
        const doc = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            date: req.body.date
        };
        console.log(doc);
        Event.update({
            _id: req.body._id,
            doc,
            function (err, result) {
                if (err) res.send(err);
                res.send('Event successfully updated!')
            }
        });
    });

router.get('/delete', function (req, res) {
    var id = req.query.id;
    Event.find({_id: id}).remove().exec(function(err,event){
        if(err) res.send(err);
        res.send('Event successfully deleted!');
    })
});

router.get('/getAll', function(req,res){
   Event.find({}, function(err, events){
       if(err) res.send(err);
       res.json(events);
   })
});


module.exports = router;