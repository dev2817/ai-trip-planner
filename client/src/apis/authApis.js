import axios from "axios"

const baseUrl = import.meta.env.VITE_AUTH_BASE_URL;
const backendUrl = import.meta.env.VITE_BACKEND_URL;

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
    }
}

export const tripApi = {
    createTrip: async (data) => {
        return await axios.post(`${backendUrl}/create-trip`, data)
    },
    getTripById: async (id) => {
        return await axios.get(`${backendUrl}/get-trip/${id}`)
    }
}