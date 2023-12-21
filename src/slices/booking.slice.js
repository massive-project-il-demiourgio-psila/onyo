import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'booking',
    initialState: {
        booking: {
            onBehalfOfUser: true,
            onBehalfOfName: null,
            onBehalfOfEmail: null,
            onBehalfOfPhone: null,
            vehicleId: "01HJ2WN9H4QD52R4JPSVBVCTVD",
            bookingType: "regular",
            startDate: "2023-12-21",
            endDate: "2023-12-23"
        },
        payment: {
            paymentProof: null,
            accountName: "",
            bookingId: null,
        },
        history: []
    },
    reducers: {
        chooseVehicle: (state, { payload: { vehicleId, bookingType, startDate, endDate } }) => {
            state.booking = {
                ...state.booking, vehicleId, startDate, endDate, bookingType,
            }
        },
        addDataDiri: (state, { payload: { onBehalfOfUser, onBehalfOfName, onBehalfOfEmail, onBehalfOfPhone } }) => {
            state.booking = {
                ...state.booking, onBehalfOfUser, onBehalfOfEmail, onBehalfOfName, onBehalfOfPhone
            }
        },
        addPayment: (state, { payload: { paymentProof, accountName, bookingId } }) => {
            state.payment = {
                ...state.payment, paymentProof, accountName, bookingId
            }
        }
    },
})

export const { chooseVehicle, addDataDiri, addPayment } = slice.actions

export default slice.reducer

export const bookingData = (state) => state.booking
