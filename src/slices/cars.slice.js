import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        filters: {
            seats: null,
            transmission: null,
            makes: null,
            classes: null
        }
    },
    reducers: {
    },
})

// export const {  } = slice.actions

export default slice.reducer

// export const selectCurrentUser = (state) => state.cars
