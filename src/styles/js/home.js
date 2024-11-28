import styled from 'styled-components'
import { FlexColChildren, FlexRowChildren } from './global'

export const LayoutContainer = styled.div`
  width: 80%;
  min-height: 100vh;
  padding-top: calc(80px + 50px); // header 50px
  padding-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  ${FlexColChildren}
  justify-content: start;
  gap: 10px;
  box-sizing: border-box;

  @media (min-width: 640px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`

export const NotifyBackground = styled.div`
  width: 100%;
  background-color: var(--grey-color);
  border-radius: 8px;
`

export const NotifyContainer = styled.div`
  padding: 8px;
`

export const NotifyParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`

export const BarContainer = styled.div`
  width: 100%;
  ${FlexRowChildren}
  justify-content: start;
  gap: 10px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const BarButton = styled.button`
  font-family: 'Beiruti';
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  text-align: center;
  padding: 8px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  white-space: nowrap;
  background-color: var(--grey-color);

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }

  &.active {
    background-color: var(--pri-color);
    color: var(--white-color);
  }
`

export const LatestContainer = styled.div`
  column-count: 1;
  column-gap: 10px;

  & > * {
    margin-bottom: 10px;
  }

  @media (min-width: 640px) {
    column-count: 2;
  }
`

export const LatestCard = styled.div`
  break-inside: avoid;
  width: 100%;
  background-color: transparent;
  border: 2px solid var(--gray-color);
  padding: 8px;
  box-sizing: border-box;
`

export const LatestCardThumbnailContainer = styled.div`
  aspect-ratio: 1/1;
`

export const LatestCardThumbnail = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`

export const LatestCardName = styled.p`
  font-family: 'Beiruti';
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  padding-top: 12px;
  text-align: justify;

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`

export const LatestCardContent = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 24px;
  padding-top: 16px;
  text-align: justify;

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`

export const LatestCardDate = styled.p`
  font-family: 'Venture Handmade';
  font-size: 32px;
  line-height: 34px;
  padding-top: 12px;
  text-align: right;

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`

export const OrganizerCard = styled.div`
  width: 100%;
  background-color: var(--grey-color);
  padding: 8px;
  border-radius: 8px;
  box-sizing: border-box;
`

export const OrganizerCardName = styled.p`
  font-family: 'UTM Bebas';
  font-size: 20px;
  line-height: 26px;

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`

export const OrganizerCardHorizontalContainer = styled.div`
  ${FlexRowChildren}
  justify-content: start;
  gap: 8px;
  padding-top: 8px;
`

export const OrganizerCardPage = styled.a`
  font-family: 'UTM Bebas';
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: var(--white-color);
  background-color: var(--pri-color);
  padding: 4px;
  text-decoration: none;
`

export const OrganizerCardActivity = styled.button`
  font-family: 'UTM Bebas';
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: var(--white-color);
  background-color: var(--yellow-color);
  padding: 4px;
  border: none;
  cursor: pointer;
`

export const AllSelect = styled.select`
  width: 100%;
  height: 44px;
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 28px;
  padding: 8px;
  background-color: var(--grey-color);
  border: none;
  border-radius: 16px;
  cursor: pointer;

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`

export const AllOption = styled.option`
  background-color: var(--grey-color);
  color: var(--black-color);
`

export const AllNoContent = styled.p`
  font-family: 'UTM Bebas';
  font-size: 24px;
  line-height: 26px;
  text-align: center;

  margin-top: auto;
  margin-bottom: auto;

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`
