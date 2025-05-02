import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { LoginUserProps } from 'src/features/auth/types'
import { toast } from 'sonner'

export const useLogin = () => {
  return useMutation({
    mutationFn: async (userData: LoginUserProps) => {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
          userData,
        )

        return data
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const message = error.response?.data.message || 'Login failed.'
          console.error('Login error: ', message)
          toast(message)
          throw new Error(message)
        }

        console.log('Unexpected login error: ', error)
        throw new Error('An unexpected error occurred.')
      }
    },
  })
}
