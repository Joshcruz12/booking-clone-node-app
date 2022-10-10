const { body, validationResult } = require('express-validator');

const { AppError } = require('../utils/appError.util');

const checkResult = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		// Array has errors
		const errorMsgs = errors.array().map(err => err.msg);

		const message = errorMsgs.join('. ');

		return next(new AppError(message, 400));
	}

	next();
};

const createHotelValidators = [
	body('name').notEmpty().withMessage('Name cannot be empty'),
	body('type').notEmpty().withMessage('it must contait type to register an hotel'),
	body('name').exists().withMessage('Hotel already exists')
];

module.exports = { createHotelValidators };
