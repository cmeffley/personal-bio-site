import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
  const routeChecker = (taco) => (admin
    ? (<Component {...taco} admin={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.any
};

export default PrivateRoute;
