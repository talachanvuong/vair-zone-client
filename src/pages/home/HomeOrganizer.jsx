import {
  OrganizerCard,
  OrganizerCardActivity,
  OrganizerCardHorizontalContainer,
  OrganizerCardName,
  OrganizerCardPage,
} from '../../styles/js/home'
import { useOption } from '../../components/contexts/OptionContext'
import { useTheme } from '../../components/contexts/ThemeContext'
import { usePage } from '../../components/contexts/PageContext'
import { useAuth } from '../../components/contexts/AuthContext'
import { MESSAGE } from '../../utils/constant'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

const HomeOrganizer = () => {
  const { token } = useAuth()
  const { changePage } = usePage()
  const { changeOption } = useOption()
  const { theme } = useTheme()
  const [data, setData] = useState([])

  useEffect(() => {
    api
      .get('/organizer/get', {
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

  const showActivities = (organizerId) => {
    changeOption(organizerId)
    changePage(1)
  }

  return (
    <>
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map(({ organizerId, organizerName, pageUrl }) => (
          <OrganizerCard key={organizerId}>
            <OrganizerCardName className={theme}>
              {organizerName}
            </OrganizerCardName>
            <OrganizerCardHorizontalContainer>
              <OrganizerCardPage href={pageUrl} target="blank">
                Xem trang
              </OrganizerCardPage>
              <OrganizerCardActivity
                onClick={() => showActivities(organizerId)}
              >
                Xem hoạt động
              </OrganizerCardActivity>
            </OrganizerCardHorizontalContainer>
          </OrganizerCard>
        ))}
    </>
  )
}

export default HomeOrganizer
