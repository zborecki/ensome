import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    header: {
      navigation: {
        color: {
          default: string;
          active: string;
        }
      }
    }
  }
}
