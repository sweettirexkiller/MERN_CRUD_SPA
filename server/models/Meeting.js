var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var meetingSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', meetingSchema);