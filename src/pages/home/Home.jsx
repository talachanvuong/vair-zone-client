import {
  BarButton,
  BarContainer,
  LayoutContainer,
  NotifyBackground,
  NotifyContainer,
  NotifyParagraph,
} from '../../styles/js/home'
import { OptionProvider } from '../../components/contexts/OptionContext'
import { useTheme } from '../../components/contexts/ThemeContext'
import { usePage } from '../../components/contexts/PageContext'
import { RootBg } from '../../styles/js/global'
import HomeOrganizer from './HomeOrganizer'
import { useEffect, useState } from 'react'
import HomeLatest from './HomeLatest'
import HomeAll from './HomeAll'

const Home = () => {
  const { theme } = useTheme()
  const { page, changePage } = usePage()
  const [active, setActive] = useState(page)

  useEffect(() => {
    const children = document.getElementById('bar').children
    children[active].classList.remove('active')
    children[page].classList.add('active')
    setActive(page)
  }, [page, theme])

  const handleContent = (e) => {
    const button = e.currentTarget
    const children = Array.from(document.getElementById('bar').childNodes)
    changePage(children.indexOf(button))
  }

  const content = () => {
    switch (page) {
      case 0:
        return <HomeLatest />
      case 1:
        return <HomeAll />
      case 2:
        return <HomeOrganizer />
      default:
        return <></>
    }
  }

  return (
    <RootBg className={theme}>
      <LayoutContainer>
        <NotifyBackground>
          <NotifyContainer>
            <NotifyParagraph className={theme}>
              — Tương lai khóc hay cười phụ thuộc vào độ lười của quá khứ! —
            </NotifyParagraph>
          </NotifyContainer>
        </NotifyBackground>

        <BarContainer id="bar">
          <BarButton className={theme} onClick={handleContent}>
            Mới nhất
          </BarButton>
          <BarButton className={theme} onClick={handleContent}>
            Tất cả
          </BarButton>
          <BarButton className={theme} onClick={handleContent}>
            Đoàn hội khoa, clb
          </BarButton>
        </BarContainer>

        <OptionProvider>{content()}</OptionProvider>
      </LayoutContainer>
    </RootBg>
  )
}

export default Home
