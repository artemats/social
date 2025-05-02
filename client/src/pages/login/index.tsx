import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from 'src/features/auth/forms/login-form'
import { LoginUserProps } from 'src/features/auth/types'
import { useLogin } from 'src/features/auth/hooks/useLogin'

const LoginPage = () => {
  const { mutate: login, isPending, data, error, isError } = useLogin()

  const handleLogin = (userData: LoginUserProps) => {
    login(userData)
  }

  console.log('LoginPage, isPending ', isPending)
  console.log('LoginPage, data ', data)
  console.log('LoginPage, isError ', isError)
  console.log('LoginPage, error ', error)

  return (
    <Fragment>
      <p className="text-gray-500 dark:text-gray-300">
        Welcome back! Please log in to your account.
      </p>
      <LoginForm onSubmit={handleLogin} isPending={isPending} />
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
