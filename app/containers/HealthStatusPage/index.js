/**
 *
 * HealthStatusPage
 *
 */

import React, { memo, useState } from 'react';
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

  const [layout, setLayout] = useState('vertical');
  const handleLayoutChange = (event, newLayout) => {
    if (newLayout === null) {
      setLayout(layout);
      return;
    }
    setLayout(newLayout);
  };

  const [scale, setScale] = useState('linear');
  const handleScaleChange = (event, newScale) => {
    if (newScale === null) {
      setScale(scale);
      return;
    }
    setScale(newScale);
  };

  const [ageGroup, setAgeGroup] = useState([]);
  const handleAgeGroupChange = event => {
    const {
      target: { value },
    } = event;
    setAgeGroup(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [selectedItem, setSelectedItem] = useState([]);
  const handleSelectedItemChange = event => {
    const {
      target: { value },
    } = event;
    setSelectedItem(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [gender, setGender] = useState([]);
  const handleGenderChange = event => {
    const {
      target: { value },
    } = event;
    setGender(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [date, setDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [fromDate, setFromDate] = useState(new Date());

  const [dependent, setDependent] = useState([]);
  const handleDependentChange = event => {
    const {
      target: { value },
    } = event;
    setDependent(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [independent, setIndependent] = useState([]);
  const handleIndependentChange = event => {
    const {
      target: { value },
    } = event;
    setIndependent(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [colorScheme, setColorScheme] = useState('nivo');
  const handleColorSchemeChange = event => {
    const {
      target: { value },
    } = event;

    setColorScheme(value);
  };

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
          <Form
            layout={layout}
            handleLayoutChange={handleLayoutChange}
            scale={scale}
            handleScaleChange={handleScaleChange}
            ageGroup={ageGroup}
            handleAgeGroupChange={handleAgeGroupChange}
            selectedItem={selectedItem}
            handleSelectedItemChange={handleSelectedItemChange}
            gender={gender}
            handleGenderChange={handleGenderChange}
            date={date}
            setDate={setDate}
            dependent={dependent}
            handleDependentChange={handleDependentChange}
            independent={independent}
            handleIndependentChange={handleIndependentChange}
            colorScheme={colorScheme}
            handleColorSchemeChange={handleColorSchemeChange}
            toDate={toDate}
            setToDate={setToDate}
            fromDate={fromDate}
            setFromDate={setFromDate}
          />
        </Box>
      </Grid>

      <Grid item xs={12} md={7} lg={8} order={{ xs: 1, md: 2, lg: 2 }}>
        <Box
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '600px',
            position: 'relative',
          }}
        >
          <BarChart
            colorScheme={colorScheme}
            layout={layout}
            scale={scale}
            data={DemoData}
          />
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
