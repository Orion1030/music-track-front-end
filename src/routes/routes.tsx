import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '~/pages/Login';
import { AuthRoute } from './AuthRoute';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import { routes } from './routerConfig';
import { NavContainer } from '~/layouts/NavContainer';
import { useAuthMiddleware } from '~/hooks/useAuthMiddleware';

export const AppRouter: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.store.isAuthenticated);
  useAuthMiddleware(isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute isAuthenticated={isAuthenticated}>
            <LoginPage />
          </AuthRoute>
        }
      />
      <Route
        path="/login"
        element={
          <AuthRoute isAuthenticated={isAuthenticated}>
            <LoginPage />
          </AuthRoute>
        }
      />
      <Route element={<NavContainer />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Route>
    </Routes>
  );
};
