import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useUserStore } from 'src/store/useUserStore'
import { IUser } from 'src/types'
import { apiErrorHandler } from 'src/utils/apiErrorHandler'

export const useUser = (_id?: string) => {
  const token = useUserStore((state) => state.token)
  const user = useUserStore((state) => state.user)
  const id = _id ?? user!._id

  return useQuery<IUser>({
    queryKey: ['user', id],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/users/${id}`,
          { headers: { Authorization: `Bearer ${token}` } },
        )

        return data
      } catch (error: unknown) {
        return apiErrorHandler(error, 'Failed to fetch user.')
      }
    },
    enabled: Boolean(id && token),
  })
}
