import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().trim().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .trim()
    .min(6, { message: 'Password must be at least 6 characters long' }),
})
