import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { MainContainer } from '../styled.components';

const Layout = (): JSX.Element => {
  const [scrollY, setScrollY] = useState(0);

  const handleScrollY = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollY, { passive: true });

    return () => window.removeEventListener('scroll', handleScrollY);
  }, []);

  return (
    <>
      <Header
        className="header"
        scrollY={scrollY}
      />
      <MainContainer
        as="main"
        scrollY={scrollY}
      >
        <Outlet />
      </MainContainer>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
