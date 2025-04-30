import { z } from 'zod'

export const RegistrationSchema = z.object({
  firstName: z.string().nonempty({ message: 'First name is required' }),
  lastName: z.string().nonempty({ message: 'Last name is required' }),
  email: z.string().trim().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .trim()
    .min(6, { message: 'Password must be at least 6 characters long' }),
})
