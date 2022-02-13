/**
 *
 * Form
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import {
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  FormGroup,
  FormControlLabel,
  Grid,
} from '@mui/material';

import Tooltip from '@mui/material/Tooltip';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Switch from '../../components/Switch/Loadable';

const CustomDivider = styled(Divider)`
  font-size: 14px;
  color: grey;
`;

const Input = styled(MuiInput)`
  width: 42px;
`;

const accentColor = '#52af77';
const CustomSlider = styled(Slider)({
  color: `${accentColor}`,
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    color: `${accentColor}`,
  },
  '& .MuiSlider-rail': {
    border: 'none',
    backgroundColor: `${accentColor}`,
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid',
    borderColor: `${accentColor}`,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: `${accentColor}`,
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

function ValueLabelComponent(props) {
  const { children, value } = props;
  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

function Form() {
  const [layout, setLayout] = useState('vertical');
  const handleLayoutChange = (event, newLayout) => {
    setLayout(newLayout);
  };

  const [scale, setScale] = useState('linear');
  const handleScaleChange = (event, newScale) => {
    setScale(newScale);
  };

  const [minAuto, setMinAuto] = useState(true);
  const handleMinAutoChange = () => {
    setMinAuto(!minAuto);
  };

  const [maxAuto, setMaxAuto] = useState(true);
  const handleMaxAutoChange = () => {
    setMaxAuto(!maxAuto);
  };

  const [minValue, setMinValue] = useState(20);
  const handleMinSliderChange = (event, newValue) => {
    setMinValue(newValue);
  };

  const handleMinInputChange = event => {
    setMinValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleMinBlur = () => {
    if (minValue < 0) {
      setMinValue(0);
    } else if (minValue > 100) {
      setMinValue(100);
    }
  };

  const [maxValue, setMaxValue] = useState(20);
  const handleMaxSliderChange = (event, newValue) => {
    setMaxValue(newValue);
  };

  const handleMaxInputChange = event => {
    setMaxValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleMaxBlur = () => {
    if (minValue < 0) {
      setMaxValue(0);
    } else if (minValue > 100) {
      setMaxValue(100);
    }
  };

  return (
    <Box
      autowidth="false"
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
      }}
    >
      <CustomDivider textAlign="left">Layout</CustomDivider>

      <ToggleButtonGroup
        color="secondary"
        value={layout}
        exclusive
        onChange={handleLayoutChange}
        size="small"
        fullWidth
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        <ToggleButton value="vertical">Vertical</ToggleButton>
        <ToggleButton value="horizontal">Horizontal</ToggleButton>
      </ToggleButtonGroup>

      <CustomDivider textAlign="left">Scale</CustomDivider>

      <ToggleButtonGroup
        color="secondary"
        value={scale}
        exclusive
        onChange={handleScaleChange}
        size="small"
        fullWidth
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        <ToggleButton value="linear">Linear</ToggleButton>
        <ToggleButton value="symlog">Symlog</ToggleButton>
      </ToggleButtonGroup>

      <CustomDivider textAlign="left">Minimum Value</CustomDivider>
      <FormGroup>
        <FormControlLabel
          onClick={handleMinAutoChange}
          control={<Switch />}
          label={minAuto ? 'auto' : 'set value'}
        />
      </FormGroup>
      {minAuto ? (
        <>
          <Box sx={{ width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs>
                <CustomSlider
                  onChange={handleMinSliderChange}
                  valueLabelDisplay="auto"
                  aria-label="min slider"
                  defaultValue={20}
                  value={typeof minValue === 'number' ? minValue : 0}
                  min={0}
                  max={200}
                  sx={{
                    width: '100%',
                  }}
                />
              </Grid>
              <Grid item mr={8}>
                <Input
                  value={minValue}
                  size="small"
                  onChange={handleMinInputChange}
                  onBlur={handleMinBlur}
                  sx={{
                    // underline when selected
                    ':after': { borderBottomColor: `${accentColor}` },
                  }}
                  inputProps={{
                    step: 10,
                    min: 0,
                    max: 100,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      ) : null}
      <CustomDivider textAlign="left">Maximum Value</CustomDivider>
      <FormGroup>
        <FormControlLabel
          onClick={handleMaxAutoChange}
          control={<Switch />}
          label={maxAuto ? 'auto' : 'set value'}
        />
      </FormGroup>
      {maxAuto ? (
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs>
              <CustomSlider
                onChange={handleMaxSliderChange}
                valueLabelDisplay="auto"
                aria-label="min slider"
                defaultValue={20}
                value={typeof maxValue === 'number' ? maxValue : 0}
                min={0}
                max={200}
                sx={{
                  width: '100%',
                }}
              />
            </Grid>
            <Grid item mr={8}>
              <Input
                value={maxValue}
                size="small"
                onChange={handleMaxInputChange}
                onBlur={handleMaxBlur}
                sx={{
                  // underline when selected
                  ':after': { borderBottomColor: `${accentColor}` },
                }}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: 100,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
          </Grid>
        </Box>
      ) : null}
    </Box>
  );
}

Form.propTypes = {};

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

export default memo(Form);
