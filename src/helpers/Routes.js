import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import About from '../views/About';
import ProjectCards from '../views/ProjectCards';
import TechUsed from '../views/TechUsed';
import EditProjects from '../views/EditProjects';

function Routes({ admin }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={() => <ProjectCards admin={admin} />} />
        <Route exact path="/tech" component={() => <TechUsed admin={admin} />} />
        <Route exact path="/editprojects" component={() => <EditProjects admin={admin}/>} />
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  admin: PropTypes.any,
};
export default Routes;
