import { InteractiveInformationProps } from '../../types/props';
import Information from '../Information';
import { InteractiveInformationButtons } from './interactiveInformation.style';

const InteractiveInformation = (
  { content: { headline, description }, children, className }: InteractiveInformationProps
): JSX.Element => (
  <div className={`${className}__interactiveInformation`}>
    <Information
      headline={headline}
      className={className}
    >
      { description }
    </Information>
    <InteractiveInformationButtons className={`${className}__buttons`}>
      { children }
    </InteractiveInformationButtons>
  </div>
);

export default InteractiveInformation;
