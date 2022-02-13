/**
 *
 * PieChart
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { ResponsivePie } from '@nivo/pie';

function PieChart({ data }) {
  const colors = data.map(item => item.color);

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      padAngle={0.7}
      sortByValue
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={colors}
      borderWidth={1}
      borderColor={{ theme: 'background' }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextOffset={9}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={3}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabel="value"
      arcLabelsRadiusOffset={0.55}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', '5.0']],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'healthy',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'suspacious',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'emergent',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'critical',
          },
          id: 'dots',
        },
      ]}
      motionConfig="stiff"
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 20,
          translateY: 46,
          itemsSpacing: 7,
          itemWidth: 80,
          itemHeight: 24,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
}

PieChart.propTypes = {
  data: PropTypes.array,
};

export default memo(PieChart);
