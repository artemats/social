import { Fragment } from 'react'
import { Typography } from '@mui/material'
import RegistrationForm from 'src/features/auth/registration-form'

const RegistrationPage = () => {
  return (
    <Fragment>
      <Typography>Create your account to get started.</Typography>
      <RegistrationForm />
    </Fragment>
  )
}

export default RegistrationPage
