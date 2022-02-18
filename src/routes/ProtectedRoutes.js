import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ component: Component, allowedRoles, ...rest }) {
  const { isLoggedIn, data } = useSelector((store) => store.login);
  console.log(data)
  const isAuthenticated = () => {
    if (isLoggedIn === true) {
      const { role } = data;
      if (allowedRoles.indexOf(role) < 0) {
        return false;
      }
      return true;
    }
    return false;
  };
  return (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated() === true
          ? <Component {...props} />
          : <Redirect to="/login" />
      )}
    />
  );
}