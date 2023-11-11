import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import SignIn from './views/SignIn';

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
]);
