const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  invoiceDetails: {
    type: String,
    required: true,
  } ,
  detail: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  roomId: {
    type: mongoose.Schema.ObjectId,
    ref: "Room",
  },
  dateStart: { 
    type: Date 
  },
  dateEnd: { 
    type: Date
   },
  amountPaid: {
    type: Number,
    default: 0,
    required: true,
  },
  paymentMethod: {
    type: Number,
    default: 0,
    required: true,
  },
  statusPayment: {
    type: Number,
    default: 0,
    required: true,
  },
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = { Reservation };
