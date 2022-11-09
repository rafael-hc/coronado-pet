import { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../store'

interface PrivateRouteProps {
  children: ReactElement
}

export const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {
  const { success } = useSelector((state: RootState) => state.users)
  if (success) {
    return children
  } else {
    return <Navigate to="/user/login" />
  }
}
