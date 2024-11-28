import {
  NavigateButton,
  NavigateContainer,
  NavigateLink,
  HorizontalContainer,
  InputContainer,
  InputInput,
  InputLabel,
  MainBackground,
  MainContainer,
  MainTitle,
} from '../../styles/js/form'
import { emailValidate, passwordValidate } from '../../services/validate'
import { useAuth } from '../../components/contexts/AuthContext'
import { MESSAGE } from '../../utils/constant'
import { storeToken } from '../../services/token'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    const button = e.currentTarget

    const emailInput = document.getElementById('emailInput')
    const passwordInput = document.getElementById('passwordInput')

    const validate = [
      emailValidate(emailInput),
      passwordValidate(passwordInput),
    ]

    if (validate.some((input) => input === false)) {
      return
    }

    button.disabled = true
    api
      .post('/user/login', {
        email: emailInput.value,
        password: passwordInput.value,
      })
      .then(({ data }) => {
        storeToken(data.token)
        login(data.token)
        toast.success(MESSAGE.LOGIN_SUCCESS)
        navigate('/me')
      })
      .catch((error) => {
        toast.error(error.response?.data?.title || MESSAGE.UNEXPECTED_ERROR)
      })
      .finally(() => {
        button.disabled = false
      })
  }

  return (
    <MainBackground>
      <MainContainer>
        <MainTitle>Đăng nhập</MainTitle>
        <InputContainer>
          <InputLabel>Email</InputLabel>
          <InputInput id="emailInput" type="email" placeholder="..." />
        </InputContainer>

        <HorizontalContainer>
          <InputContainer>
            <InputLabel>Mật khẩu</InputLabel>
            <InputInput
              id="passwordInput"
              type="password"
              minLength="8"
              maxLength="40"
              placeholder="..."
            />
          </InputContainer>
          <NavigateLink to="/forget">Quên mật khẩu</NavigateLink>
        </HorizontalContainer>

        <NavigateContainer>
          <NavigateLink to="/register">Đăng ký</NavigateLink>
          <NavigateButton onClick={handleLogin}>Xác nhận</NavigateButton>
        </NavigateContainer>
      </MainContainer>
    </MainBackground>
  )
}

export default Login
