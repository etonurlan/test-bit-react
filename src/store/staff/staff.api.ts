import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IStaff } from '../../models/models'

export const staffApi = createApi({
    reducerPath: "staffApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://frontend-test-api.stk8s.66bit.ru/api/" }),
    endpoints: (builder) => ({
        getAllStaff: builder.query<IStaff[], string>({
            query: () => ({
                url: `Employee`
            })
        }),
        getEmployee: builder.query<IStaff, string>({
            query: (id) => ({
                url: `Employee/${id}`
            })
        })
    })
})

export const {useGetAllStaffQuery, useGetEmployeeQuery} = staffApi