import {
  LatestCard,
  LatestCardContent,
  LatestCardDate,
  LatestCardName,
  LatestCardThumbnail,
  LatestCardThumbnailContainer,
  LatestContainer,
} from '../../styles/js/home'
import { useTheme } from '../../components/contexts/ThemeContext'
import { useAuth } from '../../components/contexts/AuthContext'
import { convertTime } from '../../utils/convert'
import { MESSAGE } from '../../utils/constant'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

const HomeLatest = () => {
  const { token } = useAuth()
  const { theme } = useTheme()
  const [data, setData] = useState([])

  useEffect(() => {
    api
      .get('/organizer/activity/latest', {
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

  const openUrl = (url) => {
    window.open(url, 'blank')
  }

  return (
    <LatestContainer>
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map(
          ({
            activityId,
            activityName,
            description,
            postUrl,
            imageUrl,
            createdOn,
          }) => (
            <LatestCard key={activityId}>
              <LatestCardThumbnailContainer>
                <LatestCardThumbnail
                  src={imageUrl}
                  onClick={() => openUrl(postUrl)}
                />
              </LatestCardThumbnailContainer>
              <LatestCardName className={theme}>{activityName}</LatestCardName>
              <LatestCardContent className={theme}>
                {description}
              </LatestCardContent>
              <LatestCardDate className={theme}>
                {convertTime(createdOn)}
              </LatestCardDate>
            </LatestCard>
          )
        )}
    </LatestContainer>
  )
}

export default HomeLatest
