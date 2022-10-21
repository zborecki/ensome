export interface BaseProps {
  className: string;
}

export interface HeaderProps extends BaseProps {
  scrollY: number;
}

export interface INavigation {
  label: string;
  link: string;
}
