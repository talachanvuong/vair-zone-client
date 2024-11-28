import {
  ArrowIconLink,
  ArrowIcon,
  ConfirmButton,
  HorizontalContainer,
  InputContainer,
  InputInput,
  InputLabel,
  InputTextArea,
  LayoutContainer,
  Title,
} from '../../styles/js/setting'
import {
  additionalUrlValidate,
  bioValidate,
  displayNameValidate,
} from '../../services/validate'
import { useTheme } from '../../components/contexts/ThemeContext'
import { useAuth } from '../../components/contexts/AuthContext'
import { RootBg } from '../../styles/js/global'
import { MESSAGE } from '../../utils/constant'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import _ from 'lodash'

const Info = () => {
  const { theme } = useTheme()
  const { token } = useAuth()
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

  const gender = data.gender === true ? 'Nữ' : 'Nam'

  const handleUpdate = (e) => {
    const button = e.currentTarget

    const displayNameInput = document.getElementById('displayNameInput')
    const additionalUrlInput = document.getElementById('additionalUrlInput')
    const bioInput = document.getElementById('bioInput')

    const validate = []
    const body = {}

    if (displayNameInput.value !== data.displayName) {
      validate.push(displayNameValidate(displayNameInput))
      body.displayName = displayNameInput.value
    }

    if (additionalUrlInput.value !== data.additionalUrl) {
      validate.push(additionalUrlValidate(additionalUrlInput))
      body.additionalUrl = additionalUrlInput.value
    }

    if (bioInput.value !== data.bio) {
      validate.push(bioValidate(bioInput))
      body.bio = bioInput.value
    }

    if (_.isEmpty(body)) {
      return
    }

    if (validate.some((input) => input === false)) {
      return
    }

    button.disabled = true
    api
      .patch('/user/update', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success(MESSAGE.UPDATE_SUCCESS)
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
          <ArrowIconLink to="/setting/email">
            <ArrowIcon className={theme}>{backArrowIcon}</ArrowIcon>
          </ArrowIconLink>
          <Title className={theme}>Thông tin tài khoản</Title>
          <ArrowIconLink to="/setting/password">
            <ArrowIcon className={theme}>{nextArrowIcon}</ArrowIcon>
          </ArrowIconLink>
        </HorizontalContainer>

        <InputContainer>
          <InputLabel className={theme}>Tên hiển thị:</InputLabel>
          <InputInput
            id="displayNameInput"
            className={theme}
            type="text"
            minLength="3"
            maxLength="40"
            defaultValue={data.displayName}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel className={theme}>Giới tính:</InputLabel>
          <InputInput
            className={theme}
            type="text"
            defaultValue={gender}
            readOnly
          />
        </InputContainer>

        <InputContainer>
          <InputLabel className={theme}>Đường dẫn:</InputLabel>
          <InputInput
            id="additionalUrlInput"
            className={theme}
            type="text"
            maxLength="2048"
            defaultValue={data.additionalUrl}
          />
        </InputContainer>

        <InputContainer className="twoRow">
          <InputLabel className={theme}>Tiểu sử:</InputLabel>
          <InputTextArea
            id="bioInput"
            className={theme}
            rows="6"
            maxLength="256"
            defaultValue={data.bio}
          />
        </InputContainer>

        <ConfirmButton className={theme} onClick={handleUpdate}>
          Cập nhật
        </ConfirmButton>
      </LayoutContainer>
    </RootBg>
  )
}

export default Info