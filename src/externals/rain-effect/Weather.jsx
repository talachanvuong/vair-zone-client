import { loadTextures } from './js/weather-utils'
import styled from 'styled-components'
import { useEffect } from 'react'

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100vh;
`

const Weather = ({ foreground, background }) => {
  useEffect(() => {
    loadTextures(foreground, background)
  }, [])

  return <Canvas id="container-weather" />
}

export default Weather
