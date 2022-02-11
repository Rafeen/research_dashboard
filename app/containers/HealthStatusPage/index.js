/**
 *
 * HealthStatusPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHealthStatusPage from './selectors';
import reducer from './reducer';
import saga from './saga';

// eslint-disable-next-line no-unused-vars
export function HealthStatusPage({ dispatch }) {
  useInjectReducer({ key: 'healthStatusPage', reducer });
  useInjectSaga({ key: 'healthStatusPage', saga });

  return (
    <div>
      <Helmet>
        <title>HealthStatusPage</title>
        <meta name="description" content="Description of HealthStatusPage" />
      </Helmet>
      <header>Hello</header>
    </div>
  );
}

HealthStatusPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  healthStatusPage: makeSelectHealthStatusPage(),
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
)(HealthStatusPage);
