import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { LoginUserProps } from 'src/features/auth/types'
import { useUserStore } from 'src/store/useUserStore'
import { apiErrorHandler } from 'src/utils/apiErrorHandler'

export const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser)
  const setToken = useUserStore((state) => state.setToken)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: async (userData: LoginUserProps) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        userData,
      )

      return data
    },
    onSuccess: ({ user, token }) => {
      setUser(user)
      setToken(token)
      navigate('/')
    },
    onError: (error: unknown) => apiErrorHandler(error, 'Login failed.'),
  })
}
