import { SectionType } from '../section';

export interface BaseProps {
  className: string;
}

export interface HeaderProps extends BaseProps {
  scrollY: number;
}

export interface InformationProps extends BaseProps {
  headline: string;
  children: string;
}

export interface InteractiveInformationProps extends SectionProps {
  children: JSX.Element[];
  className: string;
}

export interface SectionProps {
  content: SectionType;
}
