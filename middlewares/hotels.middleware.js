// Models
const { Hotel } = require('../models/hotel.model')

// Utils
const { AppError } = require('../utils/appError.util');
const { catchAsync } = require('../utils/catchAsync.util');

const hotelExists = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const hotel = await Hotel.findById(id);

    if (!hotel) {
		return next(new AppError('The Hotel does not exist', 404));
	}

	req.hotel = hotel;
	next();
})

module.exports = { hotelExists };