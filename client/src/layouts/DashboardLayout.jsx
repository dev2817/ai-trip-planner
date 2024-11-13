import Header from '@/components/header/Header'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
    return (
        <div className='flex flex-col items-center'>
            <Header />
            <Outlet />
        </div>
    )
}
