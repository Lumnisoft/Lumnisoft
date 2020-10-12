import React from 'react';
import views from '../views'
import {
  Switch,
  Route
} from 'react-router-dom'

const { Home, ProblemSolver } = views

const Routes = () => {

  return (
    <Switch>
      <Route
        path="/"
        exact={true}
        component={Home} />

      <Route
        path="/problem"
        component={ProblemSolver} />
      
    </Switch>
  );
}

export default Routes