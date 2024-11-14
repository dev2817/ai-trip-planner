import axios from "axios"

const baseUrl = import.meta.env.VITE_AUTH_BASE_URL;
const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const googleBaseUrl = import.meta.env.VITE_GOOGLE_BASE_URL;

export const authApi = {
    signUp: async (data) => {
        return await axios.post(`${baseUrl}/signUp`, data);
    },
    signIn: async (data) => {
        return await axios.post(`${baseUrl}/signIn`, data)
    },
    verifyOtp: async (data) => {
        return await axios.post(`${baseUrl}/otpVerify`, data)
    },
    resentOtp: async (data) => {
        return await axios.post(`${baseUrl}/resendOtp`, data)
    },
    forgotPassword: async (data) => {
        return await axios.post(`${baseUrl}/forgotPassword`, data)
    },
    resetPassword: async (data) => {
        return await axios.post(`${baseUrl}/resetPassword`, data)
    },
    checkUserData: async (data) => {
        return await axios.post(`${baseUrl}/checkUserData`, data)
    },
    signWithGoogle: async (data) => {
        return await axios.post(`${baseUrl}/signWithGoogle`, data);
    },
    completeProfile: async (data) => {
        return await axios.post(`${baseUrl}/completeProfile`, data);
    },
    checkToken: async () => {
        return await axios.get(`${baseUrl}/checkToken`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('authtoken')}`
            }
        })
    }
}

export const tripApi = {
    createTrip: async (data) => {
        return await axios.post(`${backendUrl}/create-trip`, data)
    },
    getTripById: async (id) => {
        return await axios.get(`${backendUrl}/get-trip/${id}`)
    },
    getUserTrips: async (userId) => {
        return await axios.get(`${backendUrl}/get-trips-user/${userId}`)
    },
    getPlaceGoogle: async (data) => {
        return await axios.post(`${googleBaseUrl}/places:searchText`, data, {
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
                'x-Goog-FieldMask': ['places.photos', 'places.displayName', 'places.id']
            }
        });
    },
}

export const makePhotoUrl = (name) => {
    return `${googleBaseUrl}/${name}/media?maxHeightPx=1600&maxWidthPx=1600&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;
}