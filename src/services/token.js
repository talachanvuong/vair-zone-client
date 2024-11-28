import { jwtDecode } from 'jwt-decode'
import Cookies from 'universal-cookie'

export const storeToken = (token) => {
  const cookes = new Cookies()
  const pureToken = jwtDecode(token)
  cookes.set('token', token, {
    expires: new Date(pureToken.exp * 1000),
  })
}

export const removeToken = () => {
  const cookes = new Cookies()
  cookes.remove('token')
}
