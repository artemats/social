import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'src/components/shared/Header'

const UserLayout = () => {
  console.log('UserLayout')
  return (
    <Fragment>
      <Header />
      <div>
        <Outlet />
      </div>
    </Fragment>
  )
}

export default UserLayout
