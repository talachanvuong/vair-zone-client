import {
  ArrowIconLink,
  ArrowIcon,
  HorizontalContainer,
  ConfirmButton,
  InputContainer,
  InputInput,
  InputLabel,
  LayoutContainer,
  Title,
} from '../../styles/js/setting'
import { useTheme } from '../../components/contexts/ThemeContext'
import { useAuth } from '../../components/contexts/AuthContext'
import { emailValidate } from '../../services/validate'
import { RootBg } from '../../styles/js/global'
import { MESSAGE } from '../../utils/constant'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

const Email = () => {
  const { theme } = useTheme()
  const { token, logout } = useAuth()
  const [data, setData] = useState({})

  const backArrowIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M2.11044 8.52908L16.204 0.46471C17.571 -0.316383 19.1759 1.03221 18.6389 2.51205L15.9325 9.99971L18.6389 17.4874C19.1759 18.9704 17.571 20.316 16.204 19.5349L2.11044 11.4705C0.969341 10.8206 0.972311 9.17901 2.11044 8.52908Z" />
    </svg>
  )

  const nextArrowIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M17.8896 11.4709L3.79597 19.5353C2.42902 20.3164 0.824095 18.9678 1.36113 17.4879L4.06753 10.0003L1.36113 2.51256C0.824095 1.02959 2.42902 -0.315959 3.79597 0.465134L17.8896 8.52951C19.0307 9.17943 19.0277 10.821 17.8896 11.4709Z" />
    </svg>
  )

  useEffect(() => {
    api
      .get('/user/data', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setData(data)
      })
      .catch((error) => {
        toast.error(error.response?.data?.title || MESSAGE.UNEXPECTED_ERROR)
      })
  }, [token])

  const handleUpdate = (e) => {
    const button = e.currentTarget

    const emailInput = document.getElementById('emailInput')

    if (emailInput.value === data.email) {
      return
    }

    if (!emailValidate(emailInput)) {
      return
    }

    button.disabled = true
    api
      .patch(
        '/user/update',
        {
          email: emailInput.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        toast.success(MESSAGE.UPDATE_SUCCESS)
        logout()
      })
      .catch((error) => {
        toast.error(error.response?.data?.title || MESSAGE.UNEXPECTED_ERROR)
      })
      .finally(() => {
        button.disabled = false
      })
  }

  return (
    <RootBg className={theme}>
      <LayoutContainer>
        <HorizontalContainer>
          <ArrowIconLink to="/setting/password">
            <ArrowIcon className={theme}>{backArrowIcon}</ArrowIcon>
          </ArrowIconLink>
          <Title className={theme}>Đổi email</Title>
          <ArrowIconLink to="/setting/info">
            <ArrowIcon className={theme}>{nextArrowIcon}</ArrowIcon>
          </ArrowIconLink>
        </HorizontalContainer>

        <InputContainer>
          <InputLabel className={theme}>Email:</InputLabel>
          <InputInput
            id="emailInput"
            className={theme}
            defaultValue={data.email}
          />
        </InputContainer>

        <ConfirmButton className={theme} onClick={handleUpdate}>
          Xác nhận
        </ConfirmButton>
      </LayoutContainer>
    </RootBg>
  )
}

export default Email
