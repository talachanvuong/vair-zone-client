import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  background-color: var(--white-color);
`

export const LayoutContainer = styled.div`
  width: 80%;
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

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  text-align: center;
  color: var(--black-color);
`

export const Version = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 22px;
  color: var(--black-color);
  text-align: center;
  margin-top: 12px;
`

export const Date = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 22px;
  color: var(--black-color);
  text-align: center;
  margin-top: 6px;
`

export const Bold = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  color: var(--black-color);
  margin-top: 20px;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 22px;
  color: var(--black-color);
  margin-top: 6px;
`

export const ParagraphBold = styled.span`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  color: var(--black-color);
`

export const ParagraphEmail = styled.span`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  color: var(--black-color);
  text-decoration: underline;
`

export const ParagraphHyperLink = styled.a`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  color: var(--black-color);
`
