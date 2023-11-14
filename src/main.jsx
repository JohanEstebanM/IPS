import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import CreateAppointment from './views/CreateAppointment';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/**/}
    <CreateAppointment></CreateAppointment>
    {/* <RouterProvider router={router}></RouterProvider>*/}
  </React.StrictMode>,
);
