import { configureStore } from '@reduxjs/toolkit';
import userReducer from './DataSlice';
const store = configureStore({
    reducer: {
        userData : userReducer,
    }
})

export default store;