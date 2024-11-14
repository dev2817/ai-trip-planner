import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import placeHolder from "/placeholder-2.jpeg";
import { useEffect, useState } from "react";
import { makePhotoUrl, tripApi } from "@/apis/authApis";

export default function PlaceCard({ place }) {
    const [photo, setPhoto] = useState("");

    const getPlaceImage = async () => {
        try {
            const result = await tripApi.getPlaceGoogle({ textQuery: place?.placeName })
            const url = makePhotoUrl(result.data.places[0].photos[3].name)
            setPhoto(url);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getPlaceImage();
    }, [place])
    return (
        <Link to={`https://www.google.com/maps/search/?api=1&query=${place?.placeName}`} target="_blank">
            <div className="border rounded-xl p-3 mt-2 flex gap-2 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
                <img
                    src={photo || placeHolder}
                    alt={`place-${place?.placeName}`}
                    className="h-[150px] w-[150px] object-cover rounded-xl"
                />
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-lg">
                        {place?.placeName}
                    </h2>
                    <p className="text-sm text-gray-500">
                        {place?.placeDetails}
                    </p>
                    <h2 className="mt-2">
                        {place?.ticketPricing}
                    </h2>
                    <div>
                        <Button size="sm">
                            <MapPin />
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    )
}
