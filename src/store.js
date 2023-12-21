import { configureStore } from '@reduxjs/toolkit'
import { baseApi as api } from './slices/base-api'
import authReducer from './slices/auth.slice'
import carsReducer from './slices/cars.slice'
import bookingReducer from './slices/booking.slice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    cars: carsReducer,
    bookings: bookingReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
