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
  legendOffset: 80,
};

const axisLeft = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: 'Count',
  legendPosition: 'middle',
  legendOffset: -120,
};

function BarChart({
  data,
  colorScheme,
  layout,
  scale,
  labelFontSize,
  tickFontSize,
}) {
  return (
    <ResponsiveBar
      margin={{ top: 60, right: 60, bottom: 120, left: 200 }}
      padding={0.35}
      data={data}
      keys={['value']}
      indexBy="id"
      labelTextColor="inherit:darker(2.4)"
      labelSkipWidth={12}
      labelSkipHeight={12}
      enableGridX
      axisBottom={axisBottom}
      axisLeft={axisLeft}
      colorBy="index"
      colors={{ scheme: colorScheme }}
      layout={layout}
      valueScale={{ type: scale }}
      theme={{
        axis: {
          legend: {
            text: {
              fontSize: labelFontSize,
            },
          },
          ticks: {
            text: {
              fontSize: tickFontSize,
            },
          },
        },
      }}
    />
  );
}

BarChart.propTypes = {
  data: PropTypes.array,
  colorScheme: PropTypes.string,
  scale: PropTypes.string,
  layout: PropTypes.string,
  labelFontSize: PropTypes.number,
  tickFontSize: PropTypes.number,
};

export default memo(BarChart);
