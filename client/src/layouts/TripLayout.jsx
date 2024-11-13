import { Outlet } from 'react-router-dom'

export default function TripLayout() {
    return (
        <div className='w-screen h-screen'>
            <Outlet />
        </div>
    )
}
