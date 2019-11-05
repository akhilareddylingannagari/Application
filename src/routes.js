import React from 'react';
import { Redirect , Route } from 'react-router-dom';
// Layout Types
import { DefaultLayout } from './layouts';
// import { Layout } from './components/layout/Home';

// Route Views

// import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Chart from './pages/Chart';
import TrialChart from './components/LinePlot';
import Login from './UserPages/LoginPage';
import withAuth from './wIthAuth';

const RestrictedRoute = ({component: Component, ...rest, authUser}) =>
    <Route
        {...rest}
        render={props =>
            authUser
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}
                />}
    />;

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to='/login' /> //Need confirmation: Here Registration Page should be load
  },
  // {
  //   path: '/Home',
  //   layout: Layout,
  //   component: Home
  // },
  {
    path: '/login',
    layout: DefaultLayout,
    component: Login
  },
  // {
  //   path: '/Registration',
  //   layout: DefaultLayout,
  //   component: Registration
  // },
  {
    path: '/Chart',
    layout: DefaultLayout,
    component: withAuth(Chart)
  },
  {
    path: '/TrialChart',
    layout: DefaultLayout,
    component: withAuth(TrialChart)
  },
  {
    path: '/Dashboard',
    layout: DefaultLayout,
    component: withAuth(Dashboard)
  }
];
