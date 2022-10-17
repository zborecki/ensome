export interface BaseProps {
  className: string;
}

export interface HeaderProps extends BaseProps {
  height: (height: string) => void;
}

export interface INavigation {
  label: string;
  link: string;
}
