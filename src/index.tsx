import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './theme';
import GlobalStyle from './theme/global.style';
import Home from './views/Home';
import Services from './views/Services';
import OurTeam from './views/OurTeam';
import Contacts from './views/Contacts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'services',
    element: <Services />
  },
  {
    path: 'our-team',
    element: <OurTeam />
  }, {
    path: 'contacts',
    element: <Contacts />
  }
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
