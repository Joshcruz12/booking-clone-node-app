// Models
const { Reservation } = require('../models/reservation.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const reservationExists = catchAsync(async (req, res, next) => {
	const { id } = req.params;

	const reservation = await Reservation.findById(id);

	if (!reservation) {
		return next(new AppError('Rservation not found', 404));
	}

	req.reservation = reservation;
	next();
});

module.exports = { reservationExists };