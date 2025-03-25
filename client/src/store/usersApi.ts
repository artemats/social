import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ITestUser } from 'src/types'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getAllUsers: build.query<ITestUser[], number | 'all'>({
      query: (limit) => `users?${limit && `_limit=${limit}`}`,
    }),
    getUser: build.query<ITestUser, number>({
      query: (userId) => `users/${userId.toString()}`,
    }),
  }),
})

export const { useGetAllUsersQuery, useGetUserQuery } = usersApi
