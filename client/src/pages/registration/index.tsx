import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from 'src/features/auth/registration-form'
import { RegisterUserProps } from 'src/features/auth/types'

const RegistrationPage = () => {
  const handleRegistration = (data: RegisterUserProps) => {
    console.log('Registration page, handleRegistration, data ', data)
  }

  return (
    <Fragment>
      <p className="text-gray-500">Create your account to get started.</p>
      <RegistrationForm onSubmit={handleRegistration} />
      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?{' '}
        <Link
          to="/signin"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Sign in
        </Link>
      </p>
    </Fragment>
  )
}

export default RegistrationPage
