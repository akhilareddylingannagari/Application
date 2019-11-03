import React from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import { DefaultLayout } from './layouts';
// import { Layout } from './components/layout/Home';

// Route Views

// import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Chart from './pages/Chart';
import TrialChart from './components/LinePlot';

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to='/Dashboard' /> //Need confirmation: Here Registration Page should be load
  },
  // {
  //   path: '/Home',
  //   layout: Layout,
  //   component: Home
  // },
  // {
  //   path: '/Login',
  //   layout: DefaultLayout,
  //   component: Login
  // },
  // {
  //   path: '/Registration',
  //   layout: DefaultLayout,
  //   component: Registration
  // },
  {
    path: '/Chart',
    layout: DefaultLayout,
    component: Chart
  },
  {
    path: '/TrialChart',
    layout: DefaultLayout,
    component: TrialChart
  },
  {
    path: '/Dashboard',
    layout: DefaultLayout,
    component: Dashboard
  }
];
