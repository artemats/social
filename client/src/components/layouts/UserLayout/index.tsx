import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'src/components/layout/Header'
import { Container } from '@mui/material'

const UserLayout = () => {
  console.log('UserLayout')
  return (
    <Fragment>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Fragment>
  )
}

export default UserLayout
