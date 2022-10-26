import { Link } from 'react-router-dom';
import { ImageContainer } from '../../styled.components';
import logo from '../../assets/logo.png';
import { BaseProps } from '../../types/props';

const Logo = ({ className }: BaseProps): JSX.Element => (
  <Link
    to="/"
    className={`${className}__logo`}
  >
    <ImageContainer
      width="141px"
      height="46px"
      className="logo__wrapper"
    >
      <img
        src={logo}
        alt="Ensome logo"
        className="logo__image"
      />
    </ImageContainer>
  </Link>
);

export default Logo;
