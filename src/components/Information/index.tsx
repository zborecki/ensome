import { Headline, Paragraph } from '../../styled.components';
import { InformationProps } from '../../types/props';
import { InformationWrapper } from './information.style';

const Information = ({ headline, children, className }: InformationProps): JSX.Element => (
  <InformationWrapper className={`${className}__information`}>
    <Headline
      component="h1"
      variant="h1-extrabold"
      className={`${className}__headline`}
    >
      { headline }
    </Headline>
    <Paragraph
      variant="p1-regular"
      className={`${className}__description`}
    >
      { children }
    </Paragraph>
  </InformationWrapper>
);

export default Information;
