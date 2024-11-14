import Footer from '@/pages/trips/components/Footer'
import { Outlet } from 'react-router-dom'

export default function TripLayout() {
    return (
        <div className='w-screen flex flex-col min-h-screen'>
            <Outlet />
            <Footer />
        </div>
    )
}
