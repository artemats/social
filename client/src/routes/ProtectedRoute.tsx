import { ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type ProtectedRouteProps = {
  isLocked: boolean
  redirectPath?: string
  children: ReactNode
}

const ProtectedRoute = ({
  isLocked,
  redirectPath = '/login',
  children,
}: ProtectedRouteProps) => {
  if (isLocked) {
    return <Navigate replace to={redirectPath} />
  }

  return children ? children : <Outlet />
}

export default ProtectedRoute
