import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../styled.components';
import typography from '../../theme/typography';

const {
  headline: {
    h7: {
      fontWeight,
      fontSize,
      lineHeight,
      letterSpacing
    }
  }
} = typography;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.header<{
  scrollY: number;
}>`
  position: fixed;
  width: 100%;
  padding: ${({ scrollY }) => (scrollY > 0 ? '20px 0px 20px 0px' : '40px 0px 40px 0px')};
  transition: padding 0.4s;
  background: ${({ theme: { header } }) => header.background}
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-weight: ${fontWeight.medium};
  font-size: ${fontSize};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
  color: ${({ theme: { header: { navigation } } }) => navigation.color.default};

  &.active {
    color: ${({ theme: { header: { navigation } } }) => navigation.color.active};
    font-weight: ${fontWeight.semibold};
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 40px;
`;
