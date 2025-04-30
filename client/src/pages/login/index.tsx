import { Fragment } from 'react'
import LoginForm from 'src/features/auth/login-form'
import { LoginUserProps } from 'src/features/auth/types'

const LoginPage = () => {
  const handleLogin = (userData: LoginUserProps) => {
    console.log('LoginPage, handleLogin, userData ', userData)
  }

  return (
    <Fragment>
      <p className="text-gray-500 dark:text-gray-300">
        Welcome back! Please log in to your account.
      </p>
      <LoginForm onSubmit={handleLogin} />
    </Fragment>
  )
}

export default LoginPage
