/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HealthStatusPage from 'containers/HealthStatusPage/Loadable';
import DataTablePage from 'containers/DataTablePage/Loadable';
import Login from 'containers/LoginPage/Loadable';
import PrivateRoute from 'components/PrivateRoute/Loadable';
import GlobalStyle from 'global-styles';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Alerts from 'components/Alerts/Loadable';
import { loadUser } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectAppState } from './selectors';

const theme = {
  app: {
    primary: '#ffff',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          boxShadow: 'none',
          backgroundColor: 'white',
        },
      },
    },
  },
};

function App({ dispatch, appState }) {
  useInjectReducer({ key: 'appReducer', reducer });
  useInjectSaga({ key: 'appSaga', saga });

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const { messages } = appState;

  return (
    <ThemeProvider theme={theme}>
      <Helmet
        titleTemplate="GPHC Data Visualization"
        defaultTitle="GPHC | Data Visualization"
      >
        <meta name="description" content="A robust interactive application" />
      </Helmet>
      <Alerts messages={messages} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/404" component={NotFoundPage} />
        <PrivateRoute>
          <Route path="/healthstatus" component={HealthStatusPage} />
          <Route path="/datatables" component={DataTablePage} />
        </PrivateRoute>
      </Switch>
      <GlobalStyle />
    </ThemeProvider>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  appState: makeSelectAppState(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
