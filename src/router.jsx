import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import SignIn from './views/SignIn';
import CreateAppointment from './views/CreateAppointment';
import ReadAppointment from './views/ReadAppointment';
import ProtectedRoute from './components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/SignIn',
    element: <SignIn />,
  },
  /*{
    path: '/Dasboard',
    element: (
      <ProtectedRoute>
        {' '}
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/Create',
        element: <CreateAppointment />,
      },
      {
        path: '/Read',
        element: <ReadAppointment />,
      },
    ],
  },*/
]);
