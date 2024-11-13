import { tripService } from "../services/trip.service.js";

const getAllTrips = async (req, res) => {
    try {
        const result = await tripService.getTrips();
        res.send(result)
    }
    catch (err) {
        console.log(err);
        return {
            message: err.message,
            success: false
        }
    }
}

const generateTrip = async (req, res) => {
    try {
        const result = await tripService.createTrip(req.body);
        res.send(result)
    }
    catch (err) {
        console.log(err);
        return {
            message: err.message,
            success: false
        }
    }
}

export const tripController = {
    generateTrip,
    getAllTrips
}