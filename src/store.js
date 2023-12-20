import { configureStore } from '@reduxjs/toolkit'
import { baseApi as api } from './slices/base-api'
import authReducer from './slices/auth.slice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
