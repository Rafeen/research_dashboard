import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dataTablePage state domain
 */

const selectDataTablePageDomain = state => state.dataTablePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DataTablePage
 */

const makeSelectDataTablePage = () =>
  createSelector(
    selectDataTablePageDomain,
    substate => substate,
  );

export default makeSelectDataTablePage;
export { selectDataTablePageDomain };
