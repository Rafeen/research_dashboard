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
import { Box } from '@mui/material';
import makeSelectHealthStatusPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Form from './forms';
import BarChart from '../../components/BarChart/Loadable';
import DemoData from './DemoData';

// eslint-disable-next-line no-unused-vars
export function HealthStatusPage({ dispatch }) {
  useInjectReducer({ key: 'healthStatusPage', reducer });
  useInjectSaga({ key: 'healthStatusPage', saga });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={5} lg={4} order={{ xs: 2, md: 1, lg: 1 }}>
        <Box
          overflow="scroll"
          height={800}
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
            overflowY: 'auto',
          }}
        >
          <Form />
        </Box>
      </Grid>

      <Grid item xs={12} md={7} lg={8} order={{ xs: 1, md: 2, lg: 2 }}>
        <Box>
          <Box
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: '600px',
              position: 'relative',
              // top: '0',
              // right: '300px',
            }}
          >
            <BarChart data={DemoData} />
          </Box>
          <BarChart data={DemoData} />
        </Box>
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
