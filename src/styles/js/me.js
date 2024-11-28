import { FlexColChildren, FlexRowChildren } from './global'
import styled from 'styled-components'

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

export const DecorContainer = styled.div`
  width: 100%;
  display: grid;

  & > * {
    grid-area: 1/1;
  }
`

export const DecorThumbnail = styled.div`
  width: 100%;
  fill: var(--grey-color);
`

const avatarOriginalSize = 70
const thumbnailOriginalWidth = 250
const thumbnailOriginalHeight = 150
const avatarOriginalMarginLeft = 90
const avatarOriginalMarginTop = 75
const avatarOriginalMarginBottom = 5

// prettier-ignore
export const DecorAvatarContainer = styled.div`
  width: calc(100% * ${avatarOriginalSize} / ${thumbnailOriginalWidth});
  margin-left: calc(100% * ${avatarOriginalMarginLeft} / ${thumbnailOriginalWidth});
  margin-right: calc(100% * ${avatarOriginalMarginLeft} / ${thumbnailOriginalWidth});
  margin-top: calc(100% * ${thumbnailOriginalHeight} / ${thumbnailOriginalWidth} * ${avatarOriginalMarginTop} / ${thumbnailOriginalHeight});
  margin-bottom: calc(100% * ${thumbnailOriginalHeight} / ${thumbnailOriginalWidth} * ${avatarOriginalMarginBottom} / ${thumbnailOriginalHeight});
  object-position: center;
  object-fit: cover;
  border-radius: 9999px;
  overflow: hidden;
`

export const DecorAvatar = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
`

export const DisplayName = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`

export const AdditionalUrlContainer = styled.div`
  width: 100%;
  ${FlexRowChildren}
`

export const AdditionalUrlDecor = styled.p`
  font-size: 18px;
`

export const AdditionalUrl = styled.a`
  font-family: 'Beiruti';
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`

export const Bio = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 22px;
  text-align: justify;

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`
