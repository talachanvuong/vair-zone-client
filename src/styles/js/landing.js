import { FlexRowChildren, FlexColChildren } from './global'
import styled from 'styled-components'

export const FirstPage = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  & > * {
    grid-area: 1/1;
  }
`

export const SpecialContainer = styled.div`
  width: 80%;
  height: 100%;
  ${FlexColChildren}
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 640px) {
    width: 60%;
  }
`

export const SpecialTitle = styled.p`
  font-family: 'Venture Handmade';
  text-align: center;
  color: var(--white-color);
  font-size: 72px;
  line-height: 78px;

  @media (min-width: 640px) {
    font-size: 96px;
    line-height: 102px;
  }
`

export const OtherPage = styled.div`
  width: 100%;
  background-color: var(--white-color);
`

export const LayoutContainer = styled.div`
  width: 80%;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  ${FlexColChildren}
  gap: 80px;
  box-sizing: border-box;

  @media (min-width: 640px) {
    width: 60%;
  }
`

export const Page = styled.div`
  ${FlexColChildren}
  gap: 12px;
`

export const PageTitle = styled.p`
  font-family: 'UTM Bebas';
  font-size: 48px;
  text-align: center;
  color: var(--black-color);
  line-height: 60px;
`

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Intro = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-style: italic;
  text-align: justify;
  color: var(--black-color);
  line-height: 28px;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Card = styled.div`
  background-color: var(--grey-color);
  padding: 20px;
  border-radius: 12px;
`

export const CardIconContainer = styled.div`
  width: 48px;
  height: 48px;
  background-color: var(--gray-color);
  ${FlexRowChildren}
  border-radius: 6px;
`

export const CardIcon = styled.div`
  width: 32px;
  height: 32px;
  ${FlexRowChildren}
  fill: var(--black-color);
`

export const CardTitle = styled.p`
  font-family: 'Beiruti';
  color: var(--black-color);
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
  line-height: 30px;
`

export const CardDescription = styled.p`
  font-family: 'Roboto';
  color: var(--bleck-color);
  font-size: 18px;
  line-height: 22px;
  text-align: justify;
  margin-top: 5px;
`

export const AuthorContainer = styled.div`
  ${FlexColChildren}
`

export const AuthorAvatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 12px;
`

export const AuthorName = styled.p`
  font-family: 'Roboto';
  color: var(--black-color);
  font-size: 20px;
  text-align: center;
  margin-top: 16px;
  line-height: 24px;
`

export const AuthorClass = styled.p`
  font-family: 'Roboto';
  color: var(--black-color);
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
  line-height: 22px;
`

export const Contribute = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  text-align: justify;
  color: var(--black-color);
  line-height: 26px;
`

export const ContributeLink = styled.a`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  text-align: justify;
  color: var(--black-color);
  line-height: 26px;
`
