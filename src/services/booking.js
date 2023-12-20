import { baseApi } from '../slices/base-api'

const booking = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addBooking: builder.mutation({
            query: (args) => ({
                url: '/bookings',
                method: 'POST',
                body: {
                    
                }
            }),
        }),
        addPayment: builder.mutation({
            query: (args) => ({
                url: `/bookings/:bookingId/invoice`,
                method: 'POST',
                body: {

                }
            }),
        }),
        getAllBookings: builder.query({
            query: () => ({
                url: `/bookings`,
                method: 'GET',
            })
        })
    })
})

export const { useAddBookingMutation, useAddPaymentMutation, useGetAllBookingsQuery } = booking
