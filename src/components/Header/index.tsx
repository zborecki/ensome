import { Icon } from '@iconify/react';
import { Button } from '../../styled.components';
import { HeaderProps } from '../../types/props';
import Logo from '../Logo';
import {
  HeaderContainer, HeaderWrapper, NavigationLink, NavigationList
} from './header.style';

const navigationItems: {
  label: string;
  link: string;
}[] = [
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
      <Button
        className={`${className}__button`}
        variant="contained"
        size="small"
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
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
