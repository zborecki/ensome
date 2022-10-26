import 'styled-components';
import { ButtonStates } from './src/types/button';

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
          states: ButtonStates,
          color: string
        },
        outlined: {
          states: ButtonStates,
          color: string
        }
      }
    }
  }
}
