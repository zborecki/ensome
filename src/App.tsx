import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacts from './routes/Contacts';
import Home from './routes/Home';
import Layout from './routes/Layout';
import OurTeam from './routes/OurTeam';
import Services from './routes/Services';

const App = (): JSX.Element => (
  <RouterProvider router={createBrowserRouter([
    {
      element: <Layout />,
      children: [
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
        },
        {
          path: 'contacts',
          element: <Contacts />
        }
      ]
    }
  ])}
  />
);

export default App;
