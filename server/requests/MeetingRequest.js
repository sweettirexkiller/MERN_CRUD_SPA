const {check} = require('express-validator/check');
var moment = require('moment');

exports.validation = [
    check('firstName')
        .isString()
        .isLength({min:1}).withMessage('First name is required')
        .trim(),
    check('lastName')
        .isString()
        .isLength({min:1}).withMessage('First name is required')
        .trim(),
    check('email')
        .isEmail().withMessage('Input must be email'),
    check('date')
        .custom(value =>  moment(value).isValid()).withMessage('Date must be valid')
];