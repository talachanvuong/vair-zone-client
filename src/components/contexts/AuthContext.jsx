import { createContext, useContext, useState } from 'react'
import Cookies from 'universal-cookie'

const AuthContext = createContext(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const cookies = new Cookies()
  const [token, setToken] = useState(cookies.get('token'))
  const [isLogin, setLogin] = useState(token !== undefined)

  const login = (jwt) => {
    setToken(jwt)
    setLogin(true)
  }

  const logout = () => {
    setToken(undefined)
    setLogin(false)
  }

  const value = {
    token,
    isLogin,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
