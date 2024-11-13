import { Link } from "react-router-dom";

export default function Hotels({ trip }) {
    return (
        <div>
            <h2 className="font-bold mt-5 text-xl">Hotel Recommendation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {trip?.hotels?.map((hotel, index) => (
                    <Link key={index} to={`https://www.google.com/maps/search/?api=1&query=${hotel.hotelName},${hotel.hotelAddress}`} target="_blank">
                        <div className="hover:scale-105 cursor-pointer transition-all">
                            <img src="" alt={`hotel-${index}`} className="rounded-xl" />
                            <div className="my-2 flex flex-col gap-2">
                                <h2 className="font-medium">
                                    {
                                        hotel.hotelName
                                    }
                                </h2>
                                <h2 className="text-xs text-gray-500">
                                    📍 {
                                        hotel.hotelAddress
                                    }
                                </h2>
                                <h2 className="text-sm">
                                    💰 {
                                        hotel.price
                                    }
                                </h2>
                                <h2 className="text-sm">
                                    ⭐ {
                                        hotel.rating
                                    } Stars
                                </h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
