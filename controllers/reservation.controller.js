// Models
const { Reservation } = require("../models/reservation.model.js");

// Utils 
const { catchAsync } = require("../utils/catchAsync.util.js");

const getAllReservations = catchAsync(async (req, res, next) => {
  const reservations = await Reservation.find();
  res.status(200).json({
    status: "success",
    reservations,
  });
})

const createReservation = catchAsync(async (req, res, next) => {
  const { invoice, detail, userId, roomId, dateStart, dateEnd, amountPaid, paymentMethod, statusPayment } = req.body;
  const newReservation = await Reservation.create({
    invoice,
    detail,
    roomId,
    userId,
    dateStart,
    dateEnd,
    amountPaid,
    paymentMethod,
    statusPayment,
  });
  res.status(201).json({
    status: "success",
    newReservation,
  });
});

const getReservationById = catchAsync(async (req, res, next) => {
  const { reservation } = req;
  res.status(200).json({
    status: "success",
    reservation,
  });
})

const updateReservationById = catchAsync(async (req, res, next) => {
  const { reservation } = req;
  const { invoice, detail, userId, roomId, dateStart, dateEnd, amountPaid, paymentMethod, statusPayment } = req.body;
  const updatedReservation = await Reservation.findByIdAndUpdate(
    reservation._id,
    {
      invoice,
      detail,
      userId,
      roomId,
      dateStart,
      dateEnd,
      amountPaid,
      paymentMethod,
      statusPayment,
    },
    { new: true }
  );
  res.status(200).json({
    status: "success",
    updatedReservation,
  });
})

const deleteReservationById = catchAsync(async (req, res, next) => {
  const { reservation } = req;
  await Reservation.findByIdAndDelete(reservation._id);
  res.status(204).json({
    status: "success",
    data: null,
  });
})

module.exports = {
  getAllReservations,
  createReservation,
  getReservationById,
  updateReservationById,
  deleteReservationById,
};