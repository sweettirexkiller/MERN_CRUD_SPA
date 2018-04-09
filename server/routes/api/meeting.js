var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var meetingsController = require('../../controllers/MeetingsController');
var meetingsRequest = require('../../requests/MeetingRequest');
/* GET ALL MEETINGS */
router.get('/', meetingsController.index);

/* GET SINGLE MEETING BY ID */
router.get('/:id', meetingsController.show);

/* SAVE MEETING */
router.post('/', meetingsRequest.validation, meetingsController.store);

/* UPDATE MEETING */
router.put('/:id', meetingsRequest.validation, meetingsController.update);

/* DELETE MEETING */
router.delete('/:id', meetingsController.destroy);

module.exports = router;