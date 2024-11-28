import styled from 'styled-components'
import { FlexColChildren, FlexRowChildren } from './global'
import { Link } from 'react-router-dom'

export const MainBackground = styled.div`
  background-image: url('/images/background.png');
  object-position: center;
  object-fit: cover;
  width: 100%;
  height: 100vh;
`

export const MainContainer = styled.div`
  width: 80%;
  ${FlexColChildren}
  gap: 20px;
  min-height: 100vh;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (min-width: 640px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`

export const MainTitle = styled.p`
  font-family: 'UTM Bebas';
  font-size: 40px;
  line-height: 50px;
  color: var(--white-color);
  padding: 4px;
  background-color: var(--black-color);
`

export const InputLabel = styled.label`
  font-family: 'UTM Bebas';
  font-size: 18px;
  line-height: 24px;
  color: var(--white-color);
  padding: 8px;
  background-color: var(--black-color);
  white-space: nowrap;
`

export const InputContainer = styled.div`
  width: 100%;
  ${FlexRowChildren}

  &:focus-within ${InputLabel} {
    background-color: var(--pri-color);
  }
`

export const InputInput = styled.input`
  width: 100%;
  height: 40px;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 22px;
  color: var(--bleck-color);
  padding: 5px;
  background-color: var(--white-color);
  border: 4px solid var(--black-color);
  outline: none;
  box-sizing: border-box;

  &:focus {
    border: 4px solid var(--pri-color);
  }
`

export const InputSelect = styled.select`
  width: 100%;
  height: 40px;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 22px;
  color: var(--bleck-color);
  padding: 5px;
  background-color: var(--white-color);
  border: 4px solid var(--black-color);
  outline: none;
  box-sizing: border-box;
  cursor: pointer;

  &:focus {
    border: 4px solid var(--pri-color);
  }
`

export const HorizontalContainer = styled.div`
  width: 100%;
  ${FlexRowChildren}
`

export const NavigateContainer = styled.div`
  width: 100%;
  ${FlexRowChildren}
  justify-content: space-evenly;
`

export const NavigateLink = styled(Link)`
  font-family: 'UTM Bebas';
  font-size: 20px;
  line-height: 24px;
  color: var(--white-color);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  background-color: var(--gray-color);
  padding: 8px;
`

export const NavigateButton = styled.button`
  font-family: 'UTM Bebas';
  font-size: 20px;
  line-height: 24px;
  color: var(--white-color);
  white-space: nowrap;
  background-color: var(--yellow-color);
  padding: 8px;
  cursor: pointer;
  border: none;
`
