/**
 *
 * ColorPallet
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Stack, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
// const sequentialColors = colorInterpolatorIds.map(id => ({
//   id: `seq:${id}`,
//   colors: range(0, 1, 0.05).map(t => colorInterpolators[id](t)),
// }))

function SingleColorBox({ color }) {
  return (
    <Box
      component="span"
      backgroundColor={color}
      sx={{ height: '15px', width: '15px' }}
    />
  );
}

function ColorPallet({ colors }) {
  return (
    <Stack
      direction="row"
      spacing={0}
      justifyContent="center"
      alignItems="center"
    >
      {colors.map(color => (
        <SingleColorBox color={color} key={`${uuidv4()}`} />
      ))}
    </Stack>
  );
}

ColorPallet.propTypes = {
  colors: PropTypes.array,
};

SingleColorBox.propTypes = {
  color: PropTypes.string,
};

export default memo(ColorPallet);
