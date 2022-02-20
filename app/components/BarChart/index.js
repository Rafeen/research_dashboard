/**
 *
 * BarChart
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { ResponsiveBar } from '@nivo/bar';

const axisBottom = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: 'Health Satus',
  legendPosition: 'middle',
  legendOffset: 32,
};

const axisLeft = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: 'Count',
  legendPosition: 'middle',
  legendOffset: -40,
};

function BarChart({ data, colorScheme, layout, scale }) {
  return (
    <ResponsiveBar
      margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
      padding={0.35}
      data={data}
      keys={['value']}
      indexBy="id"
      labelTextColor="inherit:darker(2.4)"
      labelSkipWidth={12}
      labelSkipHeight={12}
      enableGridX={false}
      axisBottom={axisBottom}
      axisLeft={axisLeft}
      colorBy="index"
      colors={{ scheme: colorScheme }}
      layout={layout}
      valueScale={{ type: scale }}
    />
  );
}

BarChart.propTypes = {
  data: PropTypes.array,
  colorScheme: PropTypes.string,
  scale: PropTypes.string,
  layout: PropTypes.string,
};

export default memo(BarChart);
