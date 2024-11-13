import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getTrips = async () => {
    try {
        const trips = await prisma.trip.findMany({
            include: {
                location: true,
                hotels: {
                    include: {
                        geoCoordinates: true
                    }
                },
                itinerary: {
                    include: {
                        dayPlans: {
                            include: {
                                plan: {
                                    include: {
                                        geoCoordinates: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        return {
            message: "Trips retrieved successfully",
            data: trips,
            success: true
        };
    } catch (err) {
        console.log(err);
        return {
            message: "Failed to get trips",
            success: false
        };
    }
};

const createTrip = async (tripData) => {
    try {
        const trip = await prisma.trip.create({
            data: {
                userId: tripData.userId,
                location: {
                    create: tripData.location
                },
                noOfDays: tripData.noOfDays,
                budget: tripData.budget,
                traveler: tripData.traveler,
                hotels: {
                    create: tripData.hotels.map(hotel => ({
                        ...hotel,
                        rating: `${hotel.rating}`,
                        geoCoordinates: hotel.geoCoordinates ? {
                            create: hotel.geoCoordinates
                        } : undefined
                    }))
                },
                itinerary: tripData.itinerary ? {
                    create: {
                        dayPlans: {
                            create: tripData.itinerary.map(dayPlan => ({
                                day: dayPlan.day,
                                plan: {
                                    create: dayPlan.plan.map(placePlan => ({
                                        ...placePlan,
                                        rating: `${placePlan.rating}`,
                                        geoCoordinates: placePlan.geoCoordinates ? {
                                            create: placePlan.geoCoordinates
                                        } : undefined
                                    }))
                                }
                            }))
                        }
                    }
                } : undefined,
                bestTimeToVisit: tripData.bestTimeToVisit
            }
        });

        return {
            message: "Trip created successfully",
            data: trip,
            success: true
        };
    } catch (err) {
        console.log(err);
        return {
            message: "Failed to create trip",
            success: false
        };
    }
};

const getTripDetailsById = async (tripId) => {
    try {
        const trip = await prisma.trip.findUnique({
            where: {
                id: tripId,
            },
            include: {
                location: true,
                hotels: {
                    include: {
                        geoCoordinates: true,
                    },
                },
                itinerary: {
                    include: {
                        dayPlans: {
                            include: {
                                plan: {
                                    include: {
                                        geoCoordinates: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });

        return { message: "Got trips successfully!", data: trip, success: true };

    } catch (error) {
        console.error('Error fetching trip details:', error);
        return { message: "Failed to get trips", success: false }
    }
}

const getAllTripsByUser = async (userId) => {
    try {
        const trips = await prisma.trip.findMany({
            where: {
                userId: userId,
            },
            include: {
                location: true,
                hotels: {
                    include: {
                        geoCoordinates: true,
                    },
                },
                itinerary: {
                    include: {
                        dayPlans: {
                            include: {
                                plan: {
                                    include: {
                                        geoCoordinates: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });

        return { message: "Trips got successfully!", data: trips, success: true };
    } catch (error) {
        console.error('Error fetching trips for user:', error);
        return { message: "Failed to get trips!", success: false }
    }
}

export const tripService = {
    createTrip,
    getTrips,
    getTripDetailsById,
    getAllTripsByUser
}

