import {
  AdditionalUrl,
  AdditionalUrlContainer,
  AdditionalUrlDecor,
  Bio,
  DecorAvatar,
  DecorAvatarContainer,
  DecorContainer,
  DecorThumbnail,
  DisplayName,
  LayoutContainer,
} from '../styles/js/me'
import { useTheme } from '../components/contexts/ThemeContext'
import { useAuth } from '../components/contexts/AuthContext'
import { RootBg } from '../styles/js/global'
import { useEffect, useState } from 'react'
import { MESSAGE } from '../utils/constant'
import avatar from '../../public/images/avatar.png'
import { toast } from 'react-toastify'
import { api } from '../services/api'

const Me = () => {
  const { token } = useAuth()
  const { theme } = useTheme()
  const [data, setData] = useState({})

  const thumbnail = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 150">
      <path d="M0 32C0 14.3269 14.3269 0 32 0H218C235.673 0 250 14.3269 250 32V118C250 135.673 235.673 150 218 150H161.052C156.605 150 153 146.395 153 141.948C153 139.785 153.901 137.738 155.313 136.099C161.35 129.094 165 119.973 165 110C165 87.9086 147.091 70 125 70C102.909 70 85 87.9086 85 110C85 119.973 88.65 129.094 94.687 136.099C96.0992 137.738 97 139.785 97 141.948C97 146.395 93.395 150 88.9479 150H32C14.3269 150 0 135.673 0 118V32Z" />
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

  const gender = data.gender === true ? '♀' : '♂'
  const displayName = data.displayName + gender

  return (
    <RootBg className={theme}>
      <LayoutContainer>
        <DecorContainer>
          <DecorThumbnail>{thumbnail}</DecorThumbnail>
          <DecorAvatarContainer>
            <DecorAvatar src={avatar} />
          </DecorAvatarContainer>
        </DecorContainer>
        <DisplayName className={theme}>{displayName}</DisplayName>
        <AdditionalUrlContainer>
          <AdditionalUrlDecor>👉</AdditionalUrlDecor>
          <AdditionalUrl className={theme} href={data.additionalUrl}>
            {data.additionalUrl}
          </AdditionalUrl>
          <AdditionalUrlDecor>👈</AdditionalUrlDecor>
        </AdditionalUrlContainer>
        <Bio className={theme}>{data.bio}</Bio>
      </LayoutContainer>
    </RootBg>
  )
}

export default Me
