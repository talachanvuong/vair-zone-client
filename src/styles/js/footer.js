import styled from 'styled-components'
import { FlexRowChildren } from './global'
import { Link } from 'react-router-dom'

export const MainContainer = styled.div`
  width: 100%;
`

export const MainBackground = styled.div`
  background-color: var(--pri-color);
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 12px;
`

export const MainTitle = styled.p`
  color: var(--white-color);
  font-family: 'Beiruti';
  font-weight: 600;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
`

export const SocialMedia = styled.div`
  ${FlexRowChildren}
  gap: 20px;
  margin-top: 10px;
`

export const SocialMediaIcon = styled.a`
  width: 32px;
  height: 32px;
  ${FlexRowChildren}
  fill: var(--white-color);
`

export const Info = styled.div`
  ${FlexRowChildren}
  gap: 36px;
  margin-top: 12px;
`

export const InfoLink = styled(Link)`
  color: var(--white-color);
  font-family: 'Beiruti';
  font-weight: 600;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
`

export const InfoHyperLink = styled.a`
  color: var(--white-color);
  font-family: 'Beiruti';
  font-weight: 600;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
`

export const SubContainer = styled.div`
  width: 100%;
  background-color: var(--sub-color);
  padding-top: 2px;
  padding-bottom: 2px;
`

export const SubTitle = styled.p`
  color: var(--white-color);
  font-family: 'Beiruti';
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  line-height: 28px;
`
