import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {

    const projectCode = import.meta.env.VITE_PROJECTCODE;
    const projectRole = [import.meta.env.VITE_PROJECTROLE];
    const successNavigateRoute = "/auth/dev";
    const navigate = useNavigate();

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


    return (
        <AuthContext.Provider value={{ projectCode, ipAddress, setIpAddress, projectRole, successNavigate }}>
            {children}
        </AuthContext.Provider>
    );
};
