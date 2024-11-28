import { Link } from 'react-router-dom'
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
  gap: 16px;
  box-sizing: border-box;

  @media (min-width: 640px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`

export const HorizontalContainer = styled.div`
  width: 100%;
  ${FlexRowChildren}
  justify-content: space-between;
`

export const Title = styled.p`
  font-family: 'UTM Bebas';
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  padding: 4px;
  background-color: var(--grey-color);

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`

export const ArrowIconLink = styled(Link)`
  width: 36px;
  height: 36px;
  background-color: var(--grey-color);
  ${FlexRowChildren}
  text-decoration: none;
  border-radius: 12px;
`

export const ArrowIcon = styled.div`
  width: 20px;
  height: 20px;
  ${FlexRowChildren}

  &.light {
    fill: var(--black-color);
  }

  &.dark {
    fill: var(--white-color);
  }
`

export const InputContainer = styled.div`
  width: 100%;
  ${FlexRowChildren}
  gap: 4px;

  &.twoRow {
    justify-content: left;
    flex-wrap: wrap;
  }
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 16px;
  white-space: nowrap;

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`

export const InputInput = styled.input`
  width: 100%;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 24px;
  padding: 6px 8px;
  background-color: var(--grey-color);
  border: none;
  border-radius: 12px;

  &.light {
    color: var(--bleck-color);
  }

  &.dark {
    color: var(--white-color);
  }
`

export const InputTextArea = styled.textarea`
  width: 100%;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 22px;
  text-align: justify;
  padding: 6px 8px;
  background-color: var(--grey-color);
  border: none;
  border-radius: 12px;
  resize: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &.light {
    color: var(--bleck-color);
  }

  &.dark {
    color: var(--white-color);
  }
`

export const ConfirmButton = styled.button`
  font-family: 'UTM Bebas';
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  padding: 8px;
  background-color: var(--yellow-color);
  border: none;
  cursor: pointer;

  &.light {
    color: var(--black-color);
  }

  &.dark {
    color: var(--white-color);
  }
`
