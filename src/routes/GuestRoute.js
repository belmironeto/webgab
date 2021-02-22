import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';

export default function GuestRoute({ element: Component, ...rest }) {
  const isAuthenticated = Boolean(true);

  return <Route {...rest} element={isAuthenticated ? <Home /> : Component} />;
}
