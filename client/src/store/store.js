import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import userReducer from '../features/userSlice';
import userDataReducer from '../features/userDataSlice';

const userPersistConfig = {
    key: 'user',
    storage,
};

const userDataPersistConfig = {
    key: 'userData',
    storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedUserDataReducer = persistReducer(userDataPersistConfig, userDataReducer);

const store = configureStore({
    reducer: {
        user: persistedUserReducer,
        userData: persistedUserDataReducer,
    },
});

export const persistor = persistStore(store);
export default store;
