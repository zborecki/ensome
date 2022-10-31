import { Icon } from '@iconify/react';
import {
  Button, ImageContainer, WelcomeImage, WelcomeWrapper
} from '../../styled.components';
import InteractiveInformation from '../InteractiveInformation';
import managementCenterImage from '../../assets/management-center.png';
import { SectionProps } from '../../types/props';

const Welcome = ({ content }: SectionProps): JSX.Element => (
  <WelcomeWrapper className="welcome">
    <InteractiveInformation
      content={content}
      className="welcome"
    >
      <Button
        variant="contained"
        size="medium"
        className="welcome__learnButton"
      >
        Learn more
      </Button>
      <Button
        variant="outlined"
        size="medium"
        className="welcome__watchButton"
        startIcon={(
          <Icon
            icon="fluent:play-circle-24-regular"
            width="24"
            height="24"
          />
        )}
      >
        Watch the demo
      </Button>
    </InteractiveInformation>
    <ImageContainer
      width="845px"
      height="518px"
      className="welcome__illustration"
    >
      <WelcomeImage
        src={managementCenterImage}
        alt="Management center"
        className="welcome__image"
      />
    </ImageContainer>
  </WelcomeWrapper>
);

export default Welcome;
