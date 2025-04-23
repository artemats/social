import { useForm } from 'react-hook-form'
import { Box, TextField, Button } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginUserProps } from 'src/features/auth/types'
import { LoginSchema } from 'src/features/auth/login-form/schema'

type LoginFormProps = {
  onSubmit: (userData: LoginUserProps) => void
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginUserProps>({
    resolver: zodResolver(LoginSchema),
  })
  console.log('LoginForm, errors ', errors)
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
        />
        <Button variant="contained">Login</Button>
      </form>
    </Box>
  )
}

export default LoginForm
