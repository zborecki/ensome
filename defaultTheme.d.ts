import 'styled-components';
import { ButtonStatesType, ITypography } from './src/data.types';

declare module 'styled-components' {
  export interface DefaultTheme {
    header: {
      background: string,
      navigation: {
        color: {
          default: string,
          active: string
        }
      }
    },
    button: {
      background: {
        contained: {
          states: ButtonStatesType,
          color: string
        }
      },
      small: {
        font: ITypography
      }
    }
  }
}
