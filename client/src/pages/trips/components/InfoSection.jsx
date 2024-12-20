import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import placeHolder from "/placeholder-1.jpeg";
import { makePhotoUrl, tripApi } from "@/apis/authApis";
import { useEffect, useState } from "react";

export default function InfoSection({ trip }) {
    const [photo, setPhoto] = useState("");

    const getPlaceImage = async () => {
        try {
            const result = await tripApi.getPlaceGoogle({ textQuery: trip?.location?.name })
            const url = makePhotoUrl(result.data.places[0].photos[3].name)
            setPhoto(url);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getPlaceImage();
    }, [trip])

    return (
        <div className="w-full">
            <img src={photo || placeHolder} alt="info-image" className="h-[340px] w-full object-cover rounded-xl" />
            <div className="flex justify-between items-center">
                <div className="my-5 flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">
                        {
                            trip?.location?.name
                        }
                    </h2>
                    <div className="flex gap-5">
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-md">
                            📆 {trip?.noOfDays} Days
                        </h2>
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-md">
                            💰 Budget: {trip?.budget}
                        </h2>
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-md">
                            🥂  No. of Travelers: {trip?.traveler}
                        </h2>
                    </div>
                </div>
                <div>
                    <Button>
                        <Send />
                    </Button>
                </div>
            </div>
        </div>
    )
}
