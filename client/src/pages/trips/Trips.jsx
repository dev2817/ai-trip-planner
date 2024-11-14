import { tripApi } from "@/apis/authApis";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TripCard from "./components/TripCard";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTrips = async () => {
    try {
      const res = await tripApi.getUserTrips("6716192a854ddb1df75f4cfd")
      setLoading(false)
      if (res.data.success) {
        setTrips(res.data.data)
      }
      else {
        toast.error(res.data.message)
      }
    }
    catch (err) {
      console.log(err);
      toast.error("Something went wrong!")
    }
  }
  useEffect(() => {
    setLoading(true)
    getTrips()
  }, [])
  console.log(trips);

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-60">
      <h2 className="font-bold text-3xl">My Trips</h2>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
        {trips.length > 0 && !loading ? trips.map((trip, index) => (
          <TripCard trip={trip} key={index} />
        )) :
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="h-[220px] w-full bg-slate-200 animate-pulse rounded-xl" />
          ))
        }
      </div>
    </div>
  )
}
