/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from 'containers/Login/Loadable';
import GlobalStyle from '../../global-styles';
import PrivateRoute from '../../components/PrivateRoute';

const theme = {
  app: {
    primary: '#ffff',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet
        titleTemplate="GPHC Data Visualization"
        defaultTitle="GPHC | Data Visualization"
      >
        <meta name="description" content="A robust interactive application" />
      </Helmet>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </PrivateRoute>
      </Switch>
      <GlobalStyle />
    </ThemeProvider>
  );
}
