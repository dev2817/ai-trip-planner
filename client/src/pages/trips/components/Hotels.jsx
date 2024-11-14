import HotelCard from "./HotelCard";

export default function Hotels({ trip }) {
    return (
        <div>
            <h2 className="font-bold mt-5 text-xl">Hotel Recommendation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {trip?.hotels?.map((hotel, index) => (
                    <HotelCard hotel={hotel} key={index}/>
                ))}
            </div>
        </div>
    )
}
