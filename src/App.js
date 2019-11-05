import React from 'react';
import { BrowserRouter as Router, Route , Switch , Redirect } from 'react-router-dom';
import withTracker from './GoogleAnalytics';

import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/dashboards.css';

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ''}>
    <Switch>
      <div>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })}
      </div>
    </Switch>
  </Router>
);
