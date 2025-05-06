import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useUserStore } from 'src/store/useUserStore'
import { IPost } from 'src/types'

export const usePosts = () => {
  const token = useUserStore((state) => state.token)

  return useQuery<IPost[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/posts`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      return data
    },
  })
}
