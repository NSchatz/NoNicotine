import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import timeReducer from '../features/times/timeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    time: timeReducer
  },
});
