import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const juan = 1;
  if (juan === 1) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
