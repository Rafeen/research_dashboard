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
import selections from './staticUiValues';
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

  const [dateRange, setDateRange] = useState(false);
  const handleDateRangeSwitchChange = () => {
    setDateRange(!dateRange);
  };

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
            <FormControlLabel
              sx={{ width: 'max-content' }}
              onClick={handleMinAutoChange}
              control={<Switch checked />}
              label={minAuto ? 'auto' : 'set value'}
            />
            {!minAuto ? (
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
                    multiple
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
                    multiple
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
                    multiple
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
                <Grid item xs>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      views={['year']}
                      label="To"
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
                    multiple
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
                  <InputLabel id="independent-input">Independent</InputLabel>
                  <Select
                    labelId="independent"
                    id="independent"
                    multiple
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
            <Grid container spacing={2} mb={2}>
              <Grid item xs>
                <FormControl sx={{ minWidth: '100%' }}>
                  <InputLabel id="measurement-item-input">
                    Measurement Item
                  </InputLabel>
                  <Select
                    labelId="measurement-item"
                    id="measurement-item"
                    multiple
                    value={selectedItem}
                    onChange={handleSelectedItemChange}
                    input={<OutlinedInput label="Measurement items" />}
                    MenuProps={MenuProps}
                  >
                    {selections.measurementItems.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs>
                {/* todo */}
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

Form.propTypes = {};

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

export default memo(Form);
