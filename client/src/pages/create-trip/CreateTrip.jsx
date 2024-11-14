import { tripApi } from '@/apis/authApis';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, selectBudgetOptions, selectTravelersList } from '@/utils/constants';
import { chatSession } from '@/utils/runGemini';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { z } from 'zod'
import Footer from '../trips/components/Footer';

const tripSchema = z.object({
    location: z
        .any()
        .refine((value) => value && typeof value === 'object' && value.label, {
            message: "Please select a destination.",
        }),
    noOfDays: z.number().min(1, "Please enter a valid number of days.").max(10, "Please enter days less than or equal to 10"),
    budget: z.string().nonempty("Please select a budget."),
    traveler: z.string().nonempty("Please select who you plan to travel with.")
});

export default function CreateTrip() {
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const userId = useSelector((state) => state.user.userId);

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const generateTrip = async () => {
        try {
            tripSchema.parse({
                location: formData.location,
                noOfDays: parseInt(formData.noOfDays),
                budget: formData.budget,
                traveler: formData.traveler,
            });
            setErrors({});
            const finalPrompt = AI_PROMPT
                .replace('{location}', formData?.location?.label)
                .replace('{noOfDays}', formData?.noOfDays)
                .replace('{budget}', formData?.budget)
                .replace('{traveler}', formData?.traveler)
                .replace('{noOfDays}', formData?.noOfDays)
            const result = await chatSession.sendMessage(finalPrompt)
            const tripData = await JSON.parse(result.response.text())
            const trip = {
                userId: userId,
                location: {
                    name: formData?.location?.label,
                    placeId: formData?.location?.value?.place_id
                },
                noOfDays: formData?.noOfDays,
                budget: formData?.budget,
                traveler: formData?.traveler,
                hotels: tripData?.hotels,
                itinerary: tripData?.itinerary,
                bestTimeToVisit: tripData?.bestTimeToVisit
            }
            console.log("trip", trip);
            const response = await tripApi.createTrip(trip)
            setLoading(false);
            console.log("backend resp", response);
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = {};
                error.errors.forEach((e) => {
                    fieldErrors[e.path[0]] = e.message;
                });
                setErrors(fieldErrors);
                setLoading(false);
                toast.error("Please fill all the details!")
            }
        }
    };

    return (
        <div
            className='sm:px-10 md:px-32 lg:px-36 xl:px-10 px-5 mt-10'
        >
            <h1 className='font-bold text-3xl'>
                Tell us your travel preferences 🏕️🌴
            </h1>
            <p className='mt-3 text-gray-500 text-xl'>
                Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
            </p>
            <div className="mt-20 flex flex-col gap-10">
                <div>
                    <h2 className="text-xl my-3 font-medium">What is destination of choice?</h2>
                    <GooglePlacesAutocomplete
                        apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                        selectProps={{
                            place: formData.location,
                            onChange: (v) => { handleInputChange("location", v) },
                            className: errors.location ? 'location-error' : ''
                        }}
                    />
                    {errors.location && (
                        <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                    )}
                </div>
                <div>
                    <h2 className="text-xl my-3 font-medium">How many days are you planning your trip?</h2>
                    <Input
                        placeholder="Eg: 5"
                        type="number"
                        className={`border ${errors.noOfDays ? 'border-red-500' : 'border-gray-300'} focus:border-red-500 focus:ring-0`}
                        onChange={(e) => { handleInputChange("noOfDays", e.target.value) }}
                    />
                    {errors.noOfDays && (
                        <p className="text-red-500 text-sm mt-1">{errors.noOfDays}</p>
                    )}
                </div>
                <div>
                    <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        {selectBudgetOptions.map((item, index) => (
                            <div
                                key={index}
                                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer 
                    ${formData.budget === item.title ? 'shadow-lg border-black' : ''} 
                    ${errors.budget ? 'border-red-500' : 'border-gray-300'}`}
                                onClick={() => { handleInputChange("budget", item.title) }}
                            >
                                <img className="h-[50px] w-[50px]" src={item.icon} alt={`logo-${item.title}`} />
                                <h2 className="font-bold text-lg">{item.title}</h2>
                                <h2 className="text-sm text-gray-500">{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                    {errors.budget && (
                        <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
                    )}
                </div>
                <div>
                    <h2 className="text-xl my-3 font-medium">Who do you plan on traveling with on your next adventure?</h2>
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        {selectTravelersList.map((item, index) => (
                            <div
                                key={index}
                                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer 
                    ${formData.traveler === item.people ? 'shadow-lg border-black' : ''} 
                    ${errors.traveler ? 'border-red-500' : 'border-gray-300'}`}
                                onClick={() => { handleInputChange("traveler", item.people) }}
                            >
                                <img className="h-[50px] w-[50px]" src={item.icon} alt={`logo-${item.title}`} />
                                <h2 className="font-bold text-lg">{item.title}</h2>
                                <h2 className="text-sm text-gray-500">{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                    {errors.traveler && (
                        <p className="text-red-500 text-sm mt-1">{errors.traveler}</p>
                    )}
                </div>
                <div className="my-10 flex justify-end">
                    <Button disabled={loading} onClick={() => { setLoading(true); generateTrip() }}> {loading && <LoaderCircle className='h-y w-7 animate-spin' />} Generate Trip</Button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
