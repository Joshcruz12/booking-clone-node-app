const express = require("express");

// Controllers
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
  countByCity,
  countByType,
  getHotelRooms,
} = require("../controllers/hotel.controller");

// Middlewares
const { hotelExists } = require("../middlewares/hotels.middleware");
const { protectSession } = require("../middlewares/auth.middleware");
const { createHotelValidators } = require("../middlewares/validators.hotel");

// Utils

const hotelsRouter = express.Router();

hotelsRouter.use(protectSession);
// CREATE HOTEL

hotelsRouter.route("/").get(getAllHotels).post(createHotel);
// UPDATE, DELETE AND GET
hotelsRouter
  .use("/:id", hotelExists)
  .route("/:id")
  .get(getHotel)
  .patch(updateHotel)
  .delete(deleteHotel);

hotelsRouter.route("/countByCity").get(countByCity);
hotelsRouter.route("/countByType").get(countByType);
hotelsRouter.route("/room/:id").get(getHotelRooms);

module.exports = { hotelsRouter };
