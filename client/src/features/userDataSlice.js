import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        id: "",
        email: "",
        name: "",
        profileImage: "",
        username: "",
        isActive: false,
    },
    reducers: {
        setUserData: (state, action) => {
            const { id, email, name, profileImage, username, isActive } = action.payload;
            state.id = id;
            state.email = email;
            state.name = name;
            state.profileImage = profileImage;
            state.username = username;
            state.isActive = isActive;
        },
        clearUserData: (state) => {
            state.id = "";
            state.email = "";
            state.name = "";
            state.profileImage = "";
            state.username = "";
            state.isActive = false;
        },
    },
});

export const { setUserData, clearUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
