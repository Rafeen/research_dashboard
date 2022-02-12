/**
 *
 * Form
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Form() {
  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 700,
      }}
    >
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}

Form.propTypes = {};

export default memo(Form);
