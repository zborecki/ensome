import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  img {
    width: 100%;
  }

  body {
    font-family: 'Manrope', sans-serif;

    .main {
      &__loading {
        display: flex;
        justify-content: center;
      }
    }

    .MuiCircularProgress {
      &-root {
        color: ${colors.primary};
      }
    }
  }
`;
