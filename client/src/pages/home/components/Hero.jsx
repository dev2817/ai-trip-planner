import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import landingImage from "/landing-image-2.jpeg"
import Footer from '@/pages/trips/components/Footer';
export default function Hero() {

    const navigate = useNavigate();
    return (
        <div
            className='flex flex-col items-center mx-56 gap-9'
        >
            <h1
                className='font-extrabold text-[60px] text-center mt-16'
            >
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">Discover Your Next Adventure with AI:
                </span> <br /> Personalized Itineraries at Your Fingertips
            </h1>
            <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget</p>
            <Button onClick={() => { navigate('/dashboard') }}>
                Get Started, Its Free
            </Button>
            <div className='p-10 mt-5 md:px-20 lg:px-44 xl:px-60'>
                <img src={landingImage} alt="laptop"
                    className='h-full w-full rounded-xl'
                />
            </div>
            <Footer />
        </div>
    )
}
