/**
 *
 * Login
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  Button,
  Card,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
} from '@mui/material';

import { useHistory } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

import saga from './saga';
import reducer from './reducer';
import makeSelectLogin from './selectors';

import { attemptLogin } from './actions';

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: 'center',
}));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const IMG = styled('img')(() => ({
  width: '100%',
}));

const JWTRoot = styled(JustifyBox)(() => ({
  display: 'grid',
  height: '100%',
  width: '100%',
  background: '#1A2038',
  backgroundSize: '900px 100vh, contain',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    borderRadius: 12,
    margin: '1rem',
  },
}));

const StyledProgress = styled(CircularProgress)(() => ({
  position: 'absolute',
  top: '6px',
  left: '25px',
}));

export function Login({ dispatch }) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: 'gamerrishad@gmail.com',
    password: 'dummyPass',
  });

  const handleChange = ({ target: { name, value } }) => {
    const temp = { ...userInfo };
    temp[name] = value;
    setUserInfo(temp);
  };

  const handleFormSubmit = event => {
    setLoading(true);
    dispatch(attemptLogin());
    setLoading(false);
  };

  return (
    <JWTRoot>
      <Helmet titleTemplate="Login Page" defaultTitle="GPHC Data Visualization">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Card className="card">
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <JustifyBox p={4} height="100%">
              <IMG src="../../images/icon-512x512.png" alt="" />
            </JustifyBox>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <ContentBox>
              <ValidatorForm onSubmit={handleFormSubmit}>
                <TextValidator
                  sx={{ mb: 3, width: '100%' }}
                  variant="outlined"
                  size="small"
                  label="Email"
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={userInfo.email}
                  validators={['required', 'isEmail']}
                  errorMessages={[
                    'this field is required',
                    'email is not valid',
                  ]}
                />
                <TextValidator
                  sx={{ mb: '12px', width: '100%' }}
                  label="Password"
                  variant="outlined"
                  size="small"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  value={userInfo.password}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
                <FormControlLabel
                  sx={{ mb: '12px', maxWidth: 288 }}
                  name="agreement"
                  onChange={handleChange}
                  control={
                    <Checkbox
                      size="small"
                      onChange={({ target: { checked } }) =>
                        handleChange({
                          target: {
                            name: 'agreement',
                            value: checked,
                          },
                        })
                      }
                      checked={userInfo.agreement || true}
                    />
                  }
                  label="Remember me"
                />

                <FlexBox mb={2} flexWrap="wrap">
                  <Box position="relative">
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={loading}
                      type="submit"
                    >
                      Sign in
                    </Button>
                    {loading && (
                      <StyledProgress size={24} className="buttonProgress" />
                    )}
                  </Box>
                  <Button
                    sx={{ textTransform: 'capitalize' }}
                    onClick={() => history.push('/session/signup')}
                  >
                    Sign up
                  </Button>
                </FlexBox>
                <Button
                  onClick={() => history.push('/session/forgot-password')}
                >
                  Forgot password?
                </Button>
              </ValidatorForm>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
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
)(Login);
