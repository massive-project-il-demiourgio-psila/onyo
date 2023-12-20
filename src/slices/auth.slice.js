import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (
            state,
            { payload: { data } }
        ) => {
            state.user = data.user
            state.token = data.token
        },
        clearCredentials: (
            state,
        ) => {
            state.user = null
            state.token = null
        },
    },
})

export const { setCredentials, clearCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state) => state.auth.user
