import { baseApi } from '../slices/base-api'

const cars = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCars: builder.query({
            query: () => ({
                url: '/vehicles',
                method: 'GET',
            }),
        }),
    })
})

export const { useGetCarsQuery } = cars
