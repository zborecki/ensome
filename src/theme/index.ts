import { DefaultTheme } from 'styled-components';
import colors from './colors';
import typography from './typography';

export default {
  header: {
    background: colors.white,
    navigation: {
      color: {
        default: colors.grey,
        active: colors.black
      }
    }
  },
  button: {
    background: {
      contained: {
        color: colors.white,
        states: {
          enabled: colors.primary,
          hovered: colors.blueberry,
          pressed: colors.primary,
          disabled: colors.grey
        }
      }
    },
    small: {
      font: typography.headline.h7
    }
  }
} as DefaultTheme;
