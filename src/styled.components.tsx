import styled from 'styled-components';
import { Button as MaterialButton } from '@mui/material';
import typography from './theme/typography';
import { IHeadline, IParagraph } from './types/typography';

const {
  headline: { h1, h6, h7 },
  paragraph: { p1 }
} = typography;

export const Button = styled(MaterialButton)`
  &.MuiButton {
    &-root {
      font-family: 'Manrope', sans-serif;
      box-shadow: none;
      border-radius: 6px;
      text-transform: none;

      &:hover {
        box-shadow: none;
      }
    }

    &-contained {
      background: ${({ theme: { button: { background: { contained } } } }) => contained.states.enabled};
      color: ${({ theme: { button: { background: { contained } } } }) => contained.color};

      &:hover {
        background: ${({ theme: { button: { background: { contained } } } }) => contained.states.hovered};
      }

      &:active {
        background: ${({ theme: { button: { background: { contained } } } }) => contained.states.enabled};
        box-shadow: none;
      }

      &.Mui-disabled {
        background: ${({ theme: { button: { background: { contained } } } }) => contained.states.disabled};
        color: ${({ theme: { button: { background: { contained } } } }) => contained.color};
      }
    }

    &-outlined {
      color: ${({ theme: { button: { background: { outlined } } } }) => outlined.color};
      border: none;

      &:hover {
        color: ${({ theme: { button: { background: { outlined } } } }) => outlined.states.hovered};
        border: none;
        background: transparent;
      }

      &:active {
        color: ${({ theme: { button: { background: { outlined } } } }) => outlined.states.enabled};
        box-shadow: none;
      }

      &.Mui-disabled {
        color: ${({ theme: { button: { background: { outlined } } } }) => outlined.states.disabled};
        border: none;
      }
    }

    &-sizeSmall {
      padding: 10px 14px;
      font-weight: ${h7.fontWeight.semibold};
      font-size: ${h7.fontSize};
      line-height: ${h7.lineHeight};
      letter-spacing: ${h7.letterSpacing};
    }

    &-sizeMedium {
      padding: 14px 52px;
      font-weight: ${h6.fontWeight};
      font-size: ${h6.fontSize};
      line-height: ${h6.lineHeight};
      letter-spacing: ${h6.letterSpacing};
    }

    &-outlinedSizeMedium {
      padding: 14px 20px;
    }
  }
`;

export const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;

export const Headline = styled.h1.attrs(({ component }: IHeadline) => ({
  as: component
}))<IHeadline>`
  margin: 0px;
  margin-bottom: ${
  ({ variant }) => (
    (variant === 'h1-extrabold' && '30px')
  )};
  font-weight: ${
  ({ variant }) => (
    (variant === 'h1-extrabold' && h1.fontWeight)
  )};
  font-size: ${
  ({ variant }) => (
    (variant === 'h1-extrabold' && h1.fontSize)
  )};
  line-height: ${
  ({ variant }) => (
    (variant === 'h1-extrabold' && h1.lineHeight)
  )};
  letter-spacing: ${
  ({ variant }) => (
    (variant === 'h1-extrabold' && h1.letterSpacing)
  )};
`;

export const ImageContainer = styled.div<{
  width: string;
  height: string;
}>`
  max-width: ${({ width }) => width};
  max-height: ${({ height }) => height};
`;

export const MainContainer = styled(Container)<{
  scrollY: number;
}>`
  padding-top: ${({ scrollY }) => (scrollY > 0 ? '46px' : '126px')};
  transition: padding-top 0.4s;
`;

export const Paragraph = styled.p<IParagraph>`
  margin: 0;
  font-weight: ${
  ({ variant }) => (
    (variant === 'p1-regular' && p1.fontWeight)
  )};
    font-size: ${
  ({ variant }) => (
    (variant === 'p1-regular' && p1.fontSize)
  )};
  line-height: ${
  ({ variant }) => (
    (variant === 'p1-regular' && p1.lineHeight)
  )};
  letter-spacing: ${
  ({ variant }) => (
    (variant === 'p1-regular' && p1.letterSpacing)
  )};
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  position: absolute;
`;

export const WelcomeImage = styled.img`
  position: relative;
  top: 0px;
  left: 0px;
`;
