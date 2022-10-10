const express = require('express');

// Controllers 
const {
  getAllReservations,
  createReservation,
  getReservationById,
  updateReservationById,
  deleteReservationById,
} = require('../controllers/reservation.controller');

// Middlewares
const { reservationExists } = require('../middlewares/reservations.middlewares');
const { protectSession } = require('../middlewares/auth.middleware');

const reservationsRouter = express.Router();

reservationsRouter.use(protectSession);

reservationsRouter.route('/').get(getAllReservations).post(createReservation);

reservationsRouter
    .use('/:id', reservationExists)
    .route('/:id')
    .get(getReservationById)
    .patch(updateReservationById)
    .delete(deleteReservationById);

module.exports = { reservationsRouter };

//reservation json
