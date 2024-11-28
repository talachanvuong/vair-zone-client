import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FlexRowChildren } from './global'

export const MainContainer = styled.div`
  width: 100%;
  position: fixed;
`

export const MainBackground = styled.div`
  width: 100%;
  height: 48px;
  background-color: var(--pri-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Stroke = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--sub-color);
`

export const MainTitle = styled(Link)`
  color: var(--white-color);
  font-family: 'UTM Bebas';
  margin-left: 8px;
  font-size: 24px;
  line-height: 32px;
  text-decoration: none;
`

export const NavigateContainer = styled.div`
  margin-right: 8px;
  display: flex;
  gap: 8px;
`

export const NavigateLink = styled(Link)`
  font-family: 'Beiruti';
  color: var(--white-color);
  font-size: 20px;
  line-height: 28px;
  padding: 4px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;

  &.yellow {
    background-color: var(--yellow-color);
  }

  &.gray {
    background-color: var(--gray-color);
  }
`

export const OptionContainer = styled.div`
  display: flex;
  height: 100%;
`

export const OptionIconContainer = styled.button`
  aspect-ratio: 1/1;
  ${FlexRowChildren}
  border: none;
  background-color: transparent;
  cursor: pointer;

  &.hold {
    background-color: var(--sub-color);
  }

  &:hover {
    background-color: var(--sub-color);
  }
`

export const OptionIcon = styled.div`
  width: 24px;
  height: 24px;
  ${FlexRowChildren}
  fill: var(--white-color);
`

export const MenuContainer = styled.div`
  position: absolute;
  right: 0;
`

export const MenuChoice = styled.div``

export const MenuLink = styled(Link)`
  display: block;
  padding: 6px 12px;
  background-color: var(--pri-color);
  font-family: 'Beiruti';
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--white-color);
  text-decoration: none;

  &:hover {
    background-color: var(--sub-color);
  }
`

export const MenuButton = styled.button`
  width: 100%;
  padding: 6px 12px;
  background-color: var(--pri-color);
  font-family: 'Beiruti';
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--white-color);
  border: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: var(--sub-color);
  }
`
