import styled from 'styled-components';
import { Button as MaterialButton } from '@mui/material';

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

    &-sizeSmall {
      padding: 10px 14px;
      font-weight: ${({ theme: { button: { small } } }) => small.font.fontWeight.semibold};
      font-size: ${({ theme: { button: { small } } }) => small.font.fontSize};
      line-height: ${({ theme: { button: { small } } }) => small.font.lineHeight};
      letter-spacing: ${({ theme: { button: { small } } }) => small.font.letterSpacing};
    }
  }
`;

export const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
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
