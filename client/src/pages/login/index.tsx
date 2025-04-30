import { Fragment } from 'react'
import { Link } from 'react-router-dom'
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
      <p className="mt-4 text-center text-sm text-gray-500">
        Don’t you have an account?{' '}
        <Link
          to="/signup"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Sign up
        </Link>
      </p>
    </Fragment>
  )
}

export default LoginPage
