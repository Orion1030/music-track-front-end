import React from 'react';
import { Navigate } from 'react-router-dom';

interface AuthRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export const AuthRoute: React.FC<AuthRouteProps> = ({ isAuthenticated, children }) => {
  return isAuthenticated ? <Navigate to="/home" replace /> : <>{children}</>;
};
