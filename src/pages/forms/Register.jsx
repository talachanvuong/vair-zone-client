import {
  NavigateButton,
  NavigateContainer,
  NavigateLink,
  InputContainer,
  InputInput,
  InputLabel,
  InputSelect,
  MainBackground,
  MainContainer,
  MainTitle,
} from '../../styles/js/form'
import {
  emailValidate,
  passwordValidate,
  displayNameValidate,
} from '../../services/validate'
import { MESSAGE } from '../../utils/constant'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

const Register = () => {
  const navigate = useNavigate()

  const handleRegister = (e) => {
    const button = e.currentTarget

    const displayNameInput = document.getElementById('displayNameInput')
    const genderInput = document.getElementById('genderInput')
    const emailInput = document.getElementById('emailInput')
    const passwordInput = document.getElementById('passwordInput')

    const validate = [
      displayNameValidate(displayNameInput),
      emailValidate(emailInput),
      passwordValidate(passwordInput),
    ]

    if (validate.some((input) => input === false)) {
      return
    }

    button.disabled = true
    api
      .post('/user/register', {
        displayName: displayNameInput.value,
        gender: genderInput.value === 'Nữ' ? true : false,
        email: emailInput.value,
        password: passwordInput.value,
      })
      .then(() => {
        toast.success(MESSAGE.REGISTER_SUCCESS)
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
        <MainTitle>Đăng ký</MainTitle>
        <InputContainer>
          <InputLabel>Tên hiển thị</InputLabel>
          <InputInput
            id="displayNameInput"
            type="text"
            minLength="3"
            maxLength="40"
            placeholder="..."
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Giới tính</InputLabel>
          <InputSelect id="genderInput">
            <option>Nữ</option>
            <option>Nam</option>
          </InputSelect>
        </InputContainer>

        <InputContainer>
          <InputLabel>Email</InputLabel>
          <InputInput id="emailInput" type="email" placeholder="..." />
        </InputContainer>

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

        <NavigateContainer>
          <NavigateLink to="/login">Đăng nhập</NavigateLink>
          <NavigateButton onClick={handleRegister}>Xác nhận</NavigateButton>
        </NavigateContainer>
      </MainContainer>
    </MainBackground>
  )
}

export default Register
