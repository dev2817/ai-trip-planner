const getTrips = async () => {
    try {
        return {
            message: "Trips got successfully",
            data: {},
            success: true
        }
    }
    catch (err) {
        console.log(err);
        return {
            message: err.message,
            success: false
        }
    }
}

const createTrip = async (data) => {
    try {
        return {
            message: "Trip created successfully",
            data: {},
            success: true
        }
    }
    catch (err) {
        console.log(err);
        return {
            message: err.message,
            success: false
        }
    }
}

export const tripService = {
    createTrip,
    getTrips
}

