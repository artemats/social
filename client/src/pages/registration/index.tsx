import { Fragment } from 'react'
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
    </Fragment>
  )
}

export default RegistrationPage
