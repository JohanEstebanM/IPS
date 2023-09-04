import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home';
import Login from './views/Login';
import SignIn from './views/SignIn';
import Dashboard from './views/Dashboard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignIn></SignIn>
  </React.StrictMode>,
);
