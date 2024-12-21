import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authReducer';
const store = configureStore({
  reducer: {
    //auth: authReducer, // Auth reducer
    auth:authReducer,
  },
  devTools: import.meta.env.VITE_ENV === 'development', // Sadece geliştirme ortamında devTools'u aktif et
});

export default store;