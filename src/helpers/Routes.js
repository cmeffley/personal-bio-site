import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import Home from '../views/Home';
import EditProjects from '../views/EditProjects';
import EditTech from '../views/EditTech';
import AdminAuth from '../components/AdminAuth';

function Routes({ admin }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/editprojects"
          admin={admin}
          component={() => <EditProjects admin={admin}/>} />
        <PrivateRoute exact path="/edittech"
          admin={admin}
          component={() => <EditTech admin={admin}/>} />
        <Route exact path="/auth"
          admin={admin}
          component={() => <AdminAuth admin={admin} />}
        />
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  admin: PropTypes.any,
};
export default Routes;
