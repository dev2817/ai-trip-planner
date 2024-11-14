import { makePhotoUrl, tripApi } from "@/apis/authApis";
import placeHolder from "/placeholder-1.jpeg";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function HotelCard({ hotel }) {
    const [photo, setPhoto] = useState("");

    const getPlaceImage = async () => {
        try {
            const result = await tripApi.getPlaceGoogle({ textQuery: hotel?.hotelName })
            const url = makePhotoUrl(result.data.places[0].photos[3].name)
            setPhoto(url);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getPlaceImage();
    }, [hotel])
    return (
        <div>
            <Link to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName},${hotel?.hotelAddress}`} target="_blank">
                <div className="hover:scale-105 cursor-pointer transition-all">
                    <img src={photo || placeHolder} alt={`hotel-${hotel.hotelName}`} className="rounded-xl h-[180px] w-full object-cover" />
                    <div className="my-2 flex flex-col gap-2">
                        <h2 className="font-medium">
                            {
                                hotel?.hotelName
                            }
                        </h2>
                        <h2 className="text-xs text-gray-500">
                            📍 {
                                hotel?.hotelAddress
                            }
                        </h2>
                        <h2 className="text-sm">
                            💰 {
                                hotel?.price
                            }
                        </h2>
                        <h2 className="text-sm">
                            ⭐ {
                                hotel?.rating
                            } Stars
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}
