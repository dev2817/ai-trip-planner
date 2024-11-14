import { authApi } from '@/apis/authApis';
import Header from '@/components/header/Header'
import { clearUserId } from '@/features/userSlice';
import { persistor } from '@/store/store';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'

export default function DashboardLayout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const verifyToken = async () => {
        const response = await authApi.checkToken()
        if (!response.data.success) {
            dispatch(clearUserId());
            localStorage.clear();
            persistor.purge();
            window.location.reload();
            navigate('/auth/sign-in')
            return;
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('authtoken')
        if (!token) {
            dispatch(clearUserId());
            localStorage.clear();
            persistor.purge();
            window.location.reload();
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
