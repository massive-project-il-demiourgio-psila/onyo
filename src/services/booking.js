import { baseApi } from '../slices/base-api'

const booking = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addBooking: builder.mutation({
            query: (args) => ({
                url: '/bookings',
                method: 'POST',
                body: args
            }),
        }),
        addPayment: builder.mutation({
            query: (args) => {

                const { bookingId, formData } = args

                return {
                    url: `/bookings/${bookingId}/invoice`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data;'
                    },
                    formData: true,
                    body: {
                        formData
                    }
                }
            },
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
