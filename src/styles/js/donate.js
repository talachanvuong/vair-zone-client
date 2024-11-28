import styled from "styled-components";
import { FlexColChildren } from "./global";

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
  ${FlexColChildren}
  justify-content: start;
  gap: 12px;
  box-sizing: border-box;

  @media (min-width: 640px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`

export const Title = styled.p`
  font-family: 'UTM Bebas';
  font-size: 48px;
  text-align: center;
  color: var(--black-color);
  line-height: 60px;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-style: italic;
  text-align: justify;
  color: var(--black-color);
  line-height: 28px;
`

export const Qr = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
`