import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import About from '../views/About';
import ProjectCards from '../views/ProjectCards';
import TechUsed from '../views/TechUsed';
import EditProjects from '../views/EditProjects';

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={() => <ProjectCards user={user} />} />
        <Route exact path="/tech" component={() => <TechUsed user={user} />} />
        <Route exact path="/editprojects" component={() => <EditProjects user={user}/>} />
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any
};
export default Routes;
