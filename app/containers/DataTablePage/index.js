/**
 *
 * DataTablePage
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
import { Box, Grid } from '@mui/material';
import makeSelectDataTablePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import DataTable from '../../components/DataTable/Loadable';
import Form from './forms';

// eslint-disable-next-line no-unused-vars
export function DataTablePage({ dispatch }) {
  useInjectReducer({ key: 'dataTablePage', reducer });
  useInjectSaga({ key: 'dataTablePage', saga });

  return (
    <>
      <Helmet>
        <title>DataTablePage</title>
        <meta name="description" content="Description of DataTablePage" />
      </Helmet>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5} lg={4}>
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
        <Grid item xs={12} md={7} lg={8}>
          <Box
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              height: '85vh',
            }}
          >
            <DataTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

DataTablePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dataTablePage: makeSelectDataTablePage(),
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
)(DataTablePage);
