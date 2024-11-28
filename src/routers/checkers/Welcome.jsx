import { useAuth } from '../../components/contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const Welcome = () => {
  const { isLogin } = useAuth()

  if (!isLogin) {
    return <Navigate to="/landing" />
  }

  return <Navigate to="/home" />
}

export default Welcome
