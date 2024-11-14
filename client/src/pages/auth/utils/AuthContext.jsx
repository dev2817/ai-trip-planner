import { authApi } from '@/apis/authApis';
import { setUserData } from '@/features/userDataSlice';
import { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {

    const projectCode = import.meta.env.VITE_PROJECTCODE;
    const projectRole = [import.meta.env.VITE_PROJECTROLE];
    const successNavigateRoute = "/dashboard";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user.userId);

    const getUserData = async () => {
        try {
            const res = await authApi.getUserById(userId);
            if (res.data.success) {
                console.log(res.data.data);
                const userData = {
                    id: res.data.data._id,
                    email: res.data.data.email,
                    name: res.data.data.name,
                    profileImage: res.data.data.profileImage || "",
                    username: res.data.data.username || "",
                    isActive: res.data.data.isActive,
                }
                dispatch(setUserData(userData));
            }
            else {
                toast.error(res.data.message)
            }
        }
        catch (err) {
            console.log(err);
            toast.error("Something went wrong")
        }
    }

    const [ipAddress, setIpAddress] = useState('');

    const successNavigate = () => {
        navigate(successNavigateRoute)
    }
    const fetchIpAddress = () => {
        fetch('https://geolocation-db.com/json/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setIpAddress(data.IPv4);
            })
            .catch(error => {
                console.error('Error fetching IP address:', error);
            });
    };

    useEffect(() => {
        fetchIpAddress();
    }, []);

    useEffect(() => {
        userId && getUserData()
    }, [userId])
    return (
        <AuthContext.Provider value={{ projectCode, ipAddress, setIpAddress, projectRole, successNavigate }}>
            {children}
        </AuthContext.Provider>
    );
};
