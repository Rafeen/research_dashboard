import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the healthStatusPage state domain
 */

const selectHealthStatusPageDomain = state =>
  state.healthStatusPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HealthStatusPage
 */

const makeSelectHealthStatusPage = () =>
  createSelector(
    selectHealthStatusPageDomain,
    substate => substate,
  );

export default makeSelectHealthStatusPage;
export { selectHealthStatusPageDomain };
