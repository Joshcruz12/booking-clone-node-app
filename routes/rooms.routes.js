const express = require("express");

// Controllers
const {
  createRoom,
  updateRoom,
  updateRoomAvailability,
  deleteRoom,
  getRoom,
  getRooms,
} = require("../controllers/room.controller");

// Middlewares
const { roomExists } = require("../middlewares/rooms.middleware");
const { protectSession } = require("../middlewares/auth.middleware");

const roomRouter = express.Router();

roomRouter.post("/:hotelid", createRoom);

//UPDATE
roomRouter.put("/availability/:id", updateRoomAvailability);
roomRouter.put("/:id", updateRoom);
//DELETE
roomRouter.delete("/:id/:hotelid", deleteRoom);
//GET

roomRouter.get("/:id", getRoom);
//GET ALL

roomRouter.get("/", getRooms);
// Utils
/*
const roomRouter = express.Router();

roomRouter.use(protectSession);
//CREATE
roomRouter
.use("/:id", roomExists)
.route("/:id").get(getRoom)
.patch(updateRoom);


roomRouter.route("/:hotelid").post(createRoom);

//UPDATE
roomRouter
  .route("/availability/:id")
  .patch(updateRoomAvailability);


//DELETE
roomRouter
.route("/:id/:hotel")
.delete(deleteRoom);

*/
module.exports = { roomRouter };
