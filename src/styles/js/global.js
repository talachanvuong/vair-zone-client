import styled, { css } from 'styled-components'

export const RootBg = styled.div`
  width: 100%;

  &.light {
    background-color: var(--white-color);
  }

  &.dark {
    background-color: var(--black-color);
  }
`

export const FlexColChildren = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
`

export const FlexRowChildren = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
`
