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
import {
  emailValidate,
  passwordValidate,
  codeValidate,
} from '../../services/validate'
import { MESSAGE } from '../../utils/constant'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

const Forget = () => {
  const navigate = useNavigate()

  const handleSendCode = (e) => {
    const button = e.currentTarget

    const emailInput = document.getElementById('emailInput')

    if (!emailValidate(emailInput)) {
      return
    }

    button.disabled = true
    api
      .post('/user/sendcode', {
        email: emailInput.value,
      })
      .then(() => {
        toast.success(MESSAGE.SEND_CODE_SUCCESS)

        const getCurrentTime = () => {
          return Math.round(new Date() / 1000)
        }

        const timeTick = 1000

        const end = getCurrentTime() + 30

        const countDown = setInterval(() => {
          const remain = end - getCurrentTime()

          button.innerHTML = remain

          if (remain <= 0) {
            clearInterval(countDown)
            button.innerHTML = 'Gửi mã'
            button.disabled = false
          }
        }, timeTick)
      })
      .catch((error) => {
        toast.error(error.response?.data?.title || MESSAGE.UNEXPECTED_ERROR)
        button.disabled = false
      })
  }

  const handleRenewPassword = (e) => {
    const button = e.currentTarget

    const emailInput = document.getElementById('emailInput')
    const codeInput = document.getElementById('codeInput')
    const passwordInput = document.getElementById('passwordInput')

    const validate = [
      emailValidate(emailInput),
      codeValidate(codeInput),
      passwordValidate(passwordInput),
    ]

    if (validate.some((input) => input === false)) {
      return
    }

    button.disabled = true
    api
      .post('/user/renewpassword', {
        email: emailInput.value,
        code: codeInput.value,
        newPassword: passwordInput.value,
      })
      .then(() => {
        toast.success(MESSAGE.RENEW_PASSWORD_SUCCESS)
        navigate('/login')
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
        <MainTitle>Quên mật khẩu</MainTitle>
        <HorizontalContainer>
          <InputContainer>
            <InputLabel>Email</InputLabel>
            <InputInput id="emailInput" type="email" placeholder="..." />
          </InputContainer>
          <NavigateButton onClick={handleSendCode}>Gửi mã</NavigateButton>
        </HorizontalContainer>

        <InputContainer>
          <InputLabel>Mã</InputLabel>
          <InputInput
            id="codeInput"
            type="text"
            minLength="4"
            maxLength="4"
            placeholder="..."
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Mật khẩu mới</InputLabel>
          <InputInput
            id="passwordInput"
            type="password"
            minLength="8"
            maxLength="40"
            placeholder="..."
          />
        </InputContainer>

        <NavigateContainer>
          <NavigateLink to="/login">Đăng nhập</NavigateLink>
          <NavigateButton onClick={handleRenewPassword}>
            Xác nhận
          </NavigateButton>
        </NavigateContainer>
      </MainContainer>
    </MainBackground>
  )
}

export default Forget
