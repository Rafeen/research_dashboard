import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate,
  );

/* Selector for username */
const makeSelectUsername = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.username,
  );

/* Selector for password */
const makeSelectPassword = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.password,
  );

/* Selector for password */
const makeSelectIsLoading = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.isLoading,
  );

const makeSelectForceLoginModalIsVisible = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.forceLoginModalIsVisible,
  );

const makeSelectIsForceLogin = () =>
  createSelector(
    selectLoginPageDomain,
    loginState => loginState.isForceLogin,
  );

// export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
  makeSelectLoginPage,
  makeSelectUsername,
  makeSelectPassword,
  makeSelectIsLoading,
  makeSelectForceLoginModalIsVisible,
  makeSelectIsForceLogin,
};
