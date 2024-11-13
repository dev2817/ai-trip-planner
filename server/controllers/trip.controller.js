import { tripService } from "../services/trip.service.js";

const getAllTrips = async (req, res) => {
    try {
        const result = await tripService.getTrips();
        res.send(result)
    }
    catch (err) {
        console.log(err);
        res.send({
            message: err.message,
            success: false
        })
    }
}

const generateTrip = async (req, res) => {
    try {
        const result = await tripService.createTrip(req.body);
        res.send(result)
    }
    catch (err) {
        console.log(err);
        res.send({
            message: err.message,
            success: false
        })
    }
}

const getTripDetailsById = async (req, res) => {
    try {
        const result = await tripService.getTripDetailsById(req.params.tripId);
        res.send(result)
    }
    catch (err) {
        console.log(err);
        res.send({
            message: err.message,
            success: false
        })
    }
}

const getTripDetailsByUserId = async (req, res) => {
    try {
        const result = await tripService.getAllTripsByUser(req.params.userId);
        res.send(result)
    }
    catch (err) {
        console.log(err);
        res.send({
            message: err.message,
            success: false
        })
    }
}

export const tripController = {
    generateTrip,
    getAllTrips,
    getTripDetailsById,
    getTripDetailsByUserId
}