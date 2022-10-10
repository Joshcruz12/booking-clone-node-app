const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      maxPeople: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
      //example: {number: 101, unavailableDates: [01.05.2022, 02. 05. 2)}
    },
    { timestamps: true }
  );
  
const Room = mongoose.model('Room', RoomSchema)

module.exports = { Room };
