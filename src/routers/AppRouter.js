import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from '../components/Login';
import App from '../components/App';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={Login} exact={true} />
        <PrivateRoute path='/dashboard' component={App} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
