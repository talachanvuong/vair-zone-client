import { useAuth } from '../../components/contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const Already = () => {
  const { isLogin } = useAuth()

  if (isLogin) {
    return <Navigate to="/" />
  }

  return <Outlet />
}

export default Already
