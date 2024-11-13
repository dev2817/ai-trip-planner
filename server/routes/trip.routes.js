import express from 'express'
import { tripController } from '../controllers/trip.controller.js';

const router = express.Router();

router.route('/get-all-trips').get(tripController.getAllTrips);

router.route('/get-trip/:tripId').get(tripController.getTripDetailsById);

router.route('/get-trips-user/:userId').get(tripController.getTripDetailsByUserId);

router.route('/create-trip').post(tripController.generateTrip);

export default router