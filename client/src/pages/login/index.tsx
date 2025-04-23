import { Fragment } from 'react'
import { Typography } from '@mui/material'
import LoginForm from 'src/features/auth/login-form'
import { LoginUserProps } from 'src/features/auth/types'

const LoginPage = () => {
  const handleLogin = (userData: LoginUserProps) => {
    console.log('LoginPage, handleLogin, userData ', userData)
  }

  return (
    <Fragment>
      <Typography
        color="primary
      #]"
      >
        Welcome back! Please log in to your account.
      </Typography>
      <LoginForm onSubmit={handleLogin} />
    </Fragment>
  )
}

export default LoginPage
