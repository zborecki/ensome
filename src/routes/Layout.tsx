import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Container } from '../styled.components';

const Layout = (): JSX.Element => {
  const [headerHeight, setHeaderHeight] = useState<string>();

  return (
    <>
      <Header
        className="header"
        height={(height: string) => setHeaderHeight(height)}
      />
      <Container
        style={{ paddingTop: headerHeight }}
        as="main"
      >
        <Outlet />
      </Container>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
