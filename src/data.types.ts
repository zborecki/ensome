type ButtonStates = 'enabled' | 'hovered' | 'pressed' | 'disabled';

export interface BaseProps {
  className: string;
}

export type ButtonStatesType = {
  [key in ButtonStates]: string;
};

export interface HeaderProps extends BaseProps {
  scrollY: number;
}

export interface IFontWeight {
  [k: string]: number;
}

export interface INavigation {
  label: string;
  link: string;
}

export interface InformationProps {
  headline: string;
  children: string;
}

export interface ITypography {
  fontWeight: IFontWeight;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}
