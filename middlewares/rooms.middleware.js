// Models
const { Room } = require('../models/room.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const roomExists = catchAsync(async (req, res, next) => {
	const { id } = req.params;

	const room = await Room.findById(id);

	if (!room) {
		return next(new AppError('Room not found', 404));
	}

	req.room = room;
	next();
});

module.exports = { roomExists };