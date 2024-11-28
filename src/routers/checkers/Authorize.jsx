import { useAuth } from '../../components/contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const Authorize = () => {
  const { isLogin } = useAuth()

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default Authorize
