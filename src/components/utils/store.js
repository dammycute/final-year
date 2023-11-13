import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './authSlicer'

const store = configureStore({
  reducer: authReducer,
});

export default store