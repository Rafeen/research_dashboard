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
  FormControl,
  FormGroup,
  FormControlLabel,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { colorSchemeIds, colorSchemes } from '@nivo/colors';
import selections from './staticUiValues';
import Switch from '../../components/Switch/Loadable';

import ColorPallet from '../../components/ColorPallet';
const colors = colorSchemeIds.map(id => ({
  id,
  colors: colorSchemes[id],
}));

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function ValueLabelComponent(props) {
  const { children, value } = props;
  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

function Form({
  layout,
  handleLayoutChange,
  scale,
  handleScaleChange,
  ageGroup,
  handleAgeGroupChange,
  selectedItem,
  handleSelectedItemChange,
  gender,
  handleGenderChange,
  date,
  setDate,
  dependent,
  handleDependentChange,
  independent,
  handleIndependentChange,
  colorScheme,
  handleColorSchemeChange,
  toDate,
  setToDate,
  fromDate,
  setFromDate,
  labelFontSize,
  handleLabelFontInputChange,
  handleLabelFontSliderChange,
  handleLabelFontBlur,
  tickFontSize,
  handleTickFontInputChange,
  handleTickFontSliderChange,
  handleTickFontBlur,
  maxValue,
  handleMaxInputChange,
  handleMaxSliderChange,
  handleMaxBlur,
}) {
  const [maxAuto, setMaxAuto] = useState(true);
  const handleMaxAutoChange = () => {
    setMaxAuto(!maxAuto);
  };

  const [dateRange, setDateRange] = useState(false);
  const handleDateRangeSwitchChange = () => {
    setDateRange(!dateRange);
  };

  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="chartControl-content"
          id="chartControl-header"
        >
          <Typography sx={{ flexShrink: 0 }}>Chart Customization</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            autowidth="false"
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              overflowX: 'hidden',
            }}
          >
            <FormControl sx={{ minWidth: '100%', marginBottom: '10px' }}>
              <InputLabel id="color-scheme-input">Color Scheme</InputLabel>
              <Select
                labelId="color-scheme"
                id="color-scheme"
                value={colorScheme}
                onChange={handleColorSchemeChange}
                input={<OutlinedInput label="Color Scheme" />}
                MenuProps={MenuProps}
              >
                {colors.map(scheme => (
                  <MenuItem
                    key={scheme.id}
                    value={scheme.id}
                    sx={{
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box
                      sx={{
                        justifyContent: 'space-between',
                        display: 'flex',
                        width: '100%',
                      }}
                    >
                      {scheme.id}
                      <ColorPallet colors={scheme.colors} />
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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

            <CustomDivider textAlign="left">Label Font Size</CustomDivider>
            <Box sx={{ width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs>
                  <CustomSlider
                    onChange={handleLabelFontSliderChange}
                    valueLabelDisplay="auto"
                    aria-label="size slider slider"
                    defaultValue={24}
                    value={
                      typeof labelFontSize === 'number' ? labelFontSize : 12
                    }
                    min={12}
                    max={64}
                    sx={{
                      width: '100%',
                    }}
                  />
                </Grid>
                <Grid item mr={8}>
                  <Input
                    value={labelFontSize}
                    size="small"
                    onChange={handleLabelFontInputChange}
                    onBlur={handleLabelFontBlur}
                    sx={{
                      // underline when selected
                      ':after': { borderBottomColor: `${accentColor}` },
                    }}
                    inputProps={{
                      step: 10,
                      min: 12,
                      max: 64,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
            <CustomDivider textAlign="left">Tick Font Size</CustomDivider>
            <Box sx={{ width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs>
                  <CustomSlider
                    onChange={handleTickFontSliderChange}
                    valueLabelDisplay="auto"
                    aria-label="size slider slider"
                    defaultValue={24}
                    value={typeof tickFontSize === 'number' ? tickFontSize : 12}
                    min={12}
                    max={64}
                    sx={{
                      width: '100%',
                    }}
                  />
                </Grid>
                <Grid item mr={8}>
                  <Input
                    value={tickFontSize}
                    size="small"
                    onChange={handleTickFontInputChange}
                    onBlur={handleTickFontBlur}
                    sx={{
                      // underline when selected
                      ':after': { borderBottomColor: `${accentColor}` },
                    }}
                    inputProps={{
                      step: 10,
                      min: 12,
                      max: 64,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
            <CustomDivider textAlign="left">Maximum Value</CustomDivider>
            <FormControlLabel
              sx={{ width: 'max-content' }}
              onClick={handleMaxAutoChange}
              control={<Switch checked />}
              label={maxAuto ? 'auto' : 'set value'}
            />
            {!maxAuto ? (
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
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="dataFilter-content"
          id="dataFilter-header"
        >
          <Typography sx={{ flexShrink: 0 }}>Data Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            autowidth="false"
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              overflowX: 'hidden',
            }}
          >
            <Grid container spacing={2} mb={2}>
              <Grid item xs>
                <FormControl sx={{ minWidth: '100%' }}>
                  <InputLabel id="age-group-input">Age Group</InputLabel>
                  <Select
                    labelId="age-group"
                    id="age-group"
                    value={ageGroup}
                    onChange={handleAgeGroupChange}
                    input={<OutlinedInput label="Age Group" />}
                    MenuProps={MenuProps}
                  >
                    {selections.ageGroup.map(age => (
                      <MenuItem key={age} value={age}>
                        {age}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs>
                <FormControl sx={{ minWidth: '100%' }}>
                  <InputLabel id="gender-input">Gender</InputLabel>
                  <Select
                    labelId="gender"
                    id="gender"
                    value={gender}
                    onChange={handleGenderChange}
                    input={<OutlinedInput label="gender" />}
                    MenuProps={MenuProps}
                  >
                    {selections.genderSelection.map(value => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} mb={2}>
              <Grid item xs>
                <FormControl sx={{ minWidth: '100%' }}>
                  <InputLabel id="measurement-item-input">
                    Measurement Item
                  </InputLabel>
                  <Select
                    labelId="measurement-item"
                    id="measurement-item"
                    value={selectedItem}
                    onChange={handleSelectedItemChange}
                    input={<OutlinedInput label="Measurement items" />}
                    MenuProps={MenuProps}
                  >
                    {selections.measurementItems.map(value => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    views={['year']}
                    label="Year only"
                    value={date}
                    onChange={newValue => {
                      setDate(newValue);
                    }}
                    renderInput={params => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <FormGroup sx={{ mb: 2 }}>
              <FormControlLabel
                sx={{ width: 'max-content' }}
                onClick={handleDateRangeSwitchChange}
                control={<Switch />}
                label={dateRange ? 'Set Date' : 'Use Date Range'}
              />
            </FormGroup>
            {dateRange ? (
              <Grid container spacing={2} mb={2}>
                <Grid item xs>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      views={['year']}
                      label="From"
                      value={fromDate}
                      onChange={newValue => {
                        setFromDate(newValue);
                      }}
                      renderInput={params => (
                        <TextField {...params} helperText={null} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      views={['year']}
                      label="To"
                      value={toDate}
                      onChange={newValue => {
                        setToDate(newValue);
                      }}
                      renderInput={params => (
                        <TextField {...params} helperText={null} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            ) : null}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content" /** @todo: correnct name * */
          id="panel1a-header" /** @todo: correnct name * */
        >
          <Typography sx={{ flexShrink: 0 }}>
            [Section name not specified]
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            autowidth="false"
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              overflowX: 'hidden',
            }}
          >
            <CustomDivider textAlign="left" sx={{ marginBottom: '10px' }}>
              Prediction
            </CustomDivider>
            <Grid container spacing={2} mb={2}>
              <Grid item xs>
                <FormControl sx={{ minWidth: '100%' }}>
                  <InputLabel id="dependent-input">Dependent V</InputLabel>
                  <Select
                    labelId="dependent"
                    id="dependent"
                    value={dependent}
                    onChange={handleDependentChange}
                    input={<OutlinedInput label="Dependent" />}
                    MenuProps={MenuProps}
                  >
                    {selections.dependentSelection.map(value => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs>
                <FormControl sx={{ minWidth: '100%' }}>
                  <InputLabel id="independent-input">Independent V</InputLabel>
                  <Select
                    labelId="independent"
                    id="independent"
                    value={independent}
                    onChange={handleIndependentChange}
                    input={<OutlinedInput label="Independent" />}
                    MenuProps={MenuProps}
                  >
                    {selections.independentSelection.map(value => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <CustomDivider textAlign="left" sx={{ marginBottom: '10px' }}>
              Correlation
            </CustomDivider>
            <Grid container spacing={2} mb={2}>
              <Grid item xs>
                <FormControl sx={{ minWidth: '100%' }}>
                  <InputLabel id="corr-x-input">X Axis</InputLabel>
                  <Select
                    labelId="corrX"
                    id="corrX"
                    value={dependent}
                    onChange={handleDependentChange}
                    input={<OutlinedInput label="X Axis" />}
                    MenuProps={MenuProps}
                  >
                    {selections.dependentSelection.map(value => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs>
                <FormControl sx={{ minWidth: '100%' }}>
                  <InputLabel id="corr-y-input">Y Axis</InputLabel>
                  <Select
                    labelId="corrY"
                    id="corrY"
                    value={independent}
                    onChange={handleIndependentChange}
                    input={<OutlinedInput label="Y Axis" />}
                    MenuProps={MenuProps}
                  >
                    {selections.independentSelection.map(value => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <CustomDivider textAlign="left" sx={{ marginBottom: '10px' }}>
              Comparison
            </CustomDivider>
            <Grid container spacing={2} mb={2}>
              <Grid item xs>
                <FormControl sx={{ minWidth: '100%' }}>
                  <InputLabel id="first-dataset-input">Dataset A</InputLabel>
                  <Select
                    labelId="datasetFirst"
                    id="datasetFirst"
                    value={dependent}
                    onChange={handleDependentChange}
                    input={<OutlinedInput label="Select a dataset" />}
                    MenuProps={MenuProps}
                  >
                    {selections.dependentSelection.map(value => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs>
                <FormControl sx={{ minWidth: '100%' }}>
                  <InputLabel id="second-dataset-input">Dataset B</InputLabel>
                  <Select
                    labelId="datasetSecond"
                    id="datasetSecond"
                    value={independent}
                    onChange={handleIndependentChange}
                    input={<OutlinedInput label="Select a dataset" />}
                    MenuProps={MenuProps}
                  >
                    {selections.independentSelection.map(value => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

Form.propTypes = {
  layout: PropTypes.string,
  handleLayoutChange: PropTypes.func,
  scale: PropTypes.string,
  handleScaleChange: PropTypes.func,
  ageGroup: PropTypes.array,
  handleAgeGroupChange: PropTypes.func,
  selectedItem: PropTypes.array,
  handleSelectedItemChange: PropTypes.func,
  gender: PropTypes.array,
  handleGenderChange: PropTypes.func,
  date: PropTypes.instanceOf(Date),
  setDate: PropTypes.func,
  dependent: PropTypes.array,
  handleDependentChange: PropTypes.func,
  independent: PropTypes.array,
  handleIndependentChange: PropTypes.func,
  colorScheme: PropTypes.string,
  handleColorSchemeChange: PropTypes.func,
  toDate: PropTypes.instanceOf(Date),
  setToDate: PropTypes.func,
  fromDate: PropTypes.instanceOf(Date),
  setFromDate: PropTypes.func,
  labelFontSize: PropTypes.number,
  handleLabelFontInputChange: PropTypes.func,
  handleLabelFontSliderChange: PropTypes.func,
  handleLabelFontBlur: PropTypes.func,
  tickFontSize: PropTypes.number,
  handleTickFontInputChange: PropTypes.func,
  handleTickFontSliderChange: PropTypes.func,
  handleTickFontBlur: PropTypes.func,
  maxValue: PropTypes.number,
  handleMaxInputChange: PropTypes.func,
  handleMaxSliderChange: PropTypes.func,
  handleMaxBlur: PropTypes.func,
};

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

export default memo(Form);
