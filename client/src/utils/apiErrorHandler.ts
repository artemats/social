import axios from 'axios'
import { toast } from 'sonner'

export const apiErrorHandler = (
  error: unknown,
  fallbackMessage = 'Something went wrong.',
) => {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data.message || fallbackMessage
    toast.error(message)
    console.error('Axios error: ', message)
  } else {
    toast.error(fallbackMessage)
    console.error('Unknown error: ', error)
  }
}
