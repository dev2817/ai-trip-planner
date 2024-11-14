import { authApi } from '@/apis/authApis';
import Header from '@/components/header/Header'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function DashboardLayout() {
    const navigate = useNavigate();
    const verifyToken = async () => {
       const response = await authApi.checkToken()
        if(!response.data.success){
            window.location.reload();
            localStorage.clear();
            navigate('/auth/sign-in')
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('authtoken')
        if (!token) {
            window.location.reload();
            localStorage.clear();
            navigate('/auth/sign-in')
            return;
        }
            verifyToken()        
    }, [])
    return (
        <div className='flex flex-col items-center'>
            <Header />
            <Outlet />
        </div>
    )
}
