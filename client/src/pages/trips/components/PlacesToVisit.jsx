import PlaceCard from "./PlaceCard";

export default function PlacesToVisit({ trip }) {
    return (
        <div>
            <h2 className="font-bold text-lg">
                Places to Visit
            </h2>
            <div>
                {
                    trip?.itinerary?.dayPlans?.map((item,index)=>(
                        <div className="mt-5" key={index}>
                            <h2 className="font-medium text-lg">
                                Day {item?.day}
                            </h2>
                        <div className="grid md:grid-cols-2 gap-5">
                            {item?.plan?.map((place,index)=>(
                                <div className="my-3" key={index}>
                                    <h2 className="font-medium text-sm text-orange-600">
                                        {place?.timeTravel}
                                    </h2>
                                    <PlaceCard place={place}/>
                                </div>
                            ))}
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
