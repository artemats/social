import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useUserStore } from 'src/store/useUserStore'
import { IUser } from 'src/types'

export const useUser = () => {
  const token = useUserStore((state) => state.token)
  const user = useUserStore((state) => state.user)

  return useQuery<IUser>({
    queryKey: ['user', user?._id],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/users/${user!._id}`,
        { headers: { Authorization: `Bearer ${token}` } },
      )

      return data
    },
    enabled: !!user?._id && !!token,
  })
}
