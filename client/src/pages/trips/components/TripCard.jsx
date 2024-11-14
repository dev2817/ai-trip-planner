import { useEffect, useState } from 'react';
import placeholder from '/placeholder-1.jpeg'
import { makePhotoUrl, tripApi } from '@/apis/authApis';
import { Link } from 'react-router-dom';

export default function TripCard({ trip }) {
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
        <Link to={`/dashboard/trips/${trip.id}`}>
            <div className='hover:scale-105 transition-all'>
                <img src={photo || placeholder} alt="trip-images" className="h-[220px] w-full object-cover rounded-xl" />
                <div>
                    <h2 className='font-bold text-lg'>
                        {trip?.location?.name}
                    </h2>
                    <h2 className='text-gray-500 text-sm'>{trip.noOfDays} Days Trip with {trip.budget} Budget</h2>
                </div>
            </div>
        </Link>
    )
}
