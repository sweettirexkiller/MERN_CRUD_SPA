var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var meetingsController = require('../../controllers/MeetingsController');
/* GET ALL MEETINGS */
router.get('/', meetingsController.index);

/* GET SINGLE MEETING BY ID */
router.get('/:id', meetingsController.show);

/* SAVE MEETING */
router.post('/', meetingsController.store);

/* UPDATE MEETING */
router.put('/:id', meetingsController.update);

/* DELETE MEETING */
router.delete('/:id',meetingsController.destroy);

module.exports = router;