import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PostLogin } from '../services/PostLogin';

const ProtectedRoute = ({ children }, email, password) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isAuthenticated = await PostLogin(email, password);
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
      }
    };

    fetchData();
  }, []);

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/Login" />;
  }
};

export default ProtectedRoute;
