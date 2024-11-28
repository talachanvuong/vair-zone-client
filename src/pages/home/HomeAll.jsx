import {
  AllNoContent,
  AllOption,
  AllSelect,
  LatestCard,
  LatestCardContent,
  LatestCardDate,
  LatestCardName,
  LatestCardThumbnail,
  LatestCardThumbnailContainer,
  LatestContainer,
} from '../../styles/js/home'
import { useOption } from '../../components/contexts/OptionContext'
import { useTheme } from '../../components/contexts/ThemeContext'
import { useAuth } from '../../components/contexts/AuthContext'
import { convertTime } from '../../utils/convert'
import { MESSAGE } from '../../utils/constant'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

const HomeAll = () => {
  const { token } = useAuth()
  const { currentOption, changeOption } = useOption()
  const { theme } = useTheme()
  const [option, setOption] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    api
      .get('/organizer/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setOption(data)
      })
      .catch((error) => {
        toast.error(error.response?.data?.title || MESSAGE.UNEXPECTED_ERROR)
      })

    api
      .get(`/organizer/${currentOption}/activity`, {
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
  }, [token, currentOption])

  const openUrl = (url) => {
    window.open(url, 'blank')
  }

  return (
    <>
      <AllSelect
        className={theme}
        value={currentOption}
        onChange={(e) => changeOption(e.currentTarget.value)}
      >
        {Array.isArray(option) &&
          option.length > 0 &&
          option.map(({ organizerId, organizerName }) => (
            <AllOption key={organizerId} value={organizerId}>
              {organizerName}
            </AllOption>
          ))}
      </AllSelect>

      {Array.isArray(data) && data.length > 0 ? (
        <LatestContainer>
          {data.map(
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
                <LatestCardName className={theme}>
                  {activityName}
                </LatestCardName>
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
      ) : (
        <AllNoContent className={theme}>Không có hoạt động</AllNoContent>
      )}
    </>
  )
}

export default HomeAll
