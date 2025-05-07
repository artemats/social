import axios from 'axios'
import { toast } from 'sonner'
import { useUserStore } from 'src/store/useUserStore'

export const apiErrorHandler = (
  error: unknown,
  fallbackMessage = 'Something went wrong.',
) => {
  const setLogout = useUserStore.getState().setLogout
  if (axios.isAxiosError(error)) {
    const message = error.response?.data.message || fallbackMessage
    const isExpiredToken = error.response?.data.isExpiredToken

    if (isExpiredToken) {
      toast.error('Session expired. Please log in again.')
      setLogout()
    } else {
      toast.error(message)
    }
    console.error('Axios error: ', message)
  } else {
    toast.error(fallbackMessage)
    console.error('Unknown error: ', error)
  }
}
