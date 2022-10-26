export interface IHeadline {
  variant: 'h1-extrabold';
  component: 'h1';
}

export interface IParagraph {
  variant: 'p1-regular'
}

export interface ITypography {
  fontWeight: {
    [k: string]: number
  };
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}
