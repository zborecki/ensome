import { Button } from '@mui/material';
import { HeaderProps, INavigation } from '../../data.types';
import Logo from '../Logo';
import {
  HeaderContainer, HeaderWrapper, NavigationLink, NavigationList
} from './header.style';

const navigationItems: INavigation[] = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Services',
    link: 'services'
  },
  {
    label: 'Our team',
    link: 'our-team'
  },
  {
    label: 'Contacts',
    link: 'contacts'
  }
];

const Header = ({ className, scrollY }: HeaderProps): JSX.Element => (
  <HeaderWrapper
    className={className}
    scrollY={scrollY}
  >
    <HeaderContainer
      className={`${className}__container`}
    >
      <Logo className={className} />
      <nav className={`${className}__navigation`}>
        <NavigationList className="navigation__list">
          {
            navigationItems.map(({ label, link }) => (
              <li
                key={label}
                className="navigation__item"
              >
                <NavigationLink
                  end
                  to={link}
                  className="navigation__link"
                >
                  { label }
                </NavigationLink>
              </li>
            ))
          }
        </NavigationList>
      </nav>

      { /* TODO: Set a style for buttons */ }
      <Button className={`${className}__button`}>Button</Button>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
