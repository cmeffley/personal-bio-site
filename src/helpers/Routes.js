import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import About from '../views/About';
import TechUsed from '../views/TechUsed';

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} />} />
        <Route exact path="/about" component={() => <About user={user} />} />
        <Route exact path="/tech" component={() => <TechUsed user={user} />} />
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
};
export default Routes;
