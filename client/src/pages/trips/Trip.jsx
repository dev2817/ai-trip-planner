import { tripApi } from "@/apis/authApis";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom"
import InfoSection from "./components/InfoSection";
import Hotels from "./components/Hotels";
import PlacesToVisit from "./components/PlacesToVisit";

export default function Trip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState({});
    const navigate = useNavigate();

    const getTrip = async () => {
        try {
            const res = await tripApi.getTripById(tripId);
            if (res.data.success) {
                setTrip(res.data.data)
            }
            else {
                toast.error("No trip found!");
                navigate('/dashboard/create-trip');
                return;
            }
        }
        catch (err) {
            console.log(err);
            toast.error("Something went wrong!");
            navigate('/dashboard/create-trip');
        }
    }

    useEffect(() => {
        tripId && getTrip()
    }, [tripId])

    useEffect(() => {
        console.log("effect working");

    }, [])
    return (
        <div className="p-10 md:px-20 lg:px-44 xl:px-60 flex-grow">
            <InfoSection trip={trip} />
            <Hotels trip={trip} />
            <PlacesToVisit trip={trip} />
        </div>
    )
}
