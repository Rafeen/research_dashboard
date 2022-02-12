/**
 *
 * HealthStatusPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import makeSelectHealthStatusPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Form from '../../components/Form';

// eslint-disable-next-line no-unused-vars
export function HealthStatusPage({ dispatch }) {
  useInjectReducer({ key: 'healthStatusPage', reducer });
  useInjectSaga({ key: 'healthStatusPage', saga });

  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        md={5}
        lg={4}
        autowidth="false"
        overflow="scroll"
        sx={{ overflowX: 'hidden' }}
      >
        <Form />
      </Grid>

      <Grid item xs={12} md={7} lg={8}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <div>Hello Health</div>
        </Paper>
      </Grid>
    </Grid>
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
