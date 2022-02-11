import { createSelector } from 'reselect';

const selectAppState = state => state.appReducer;

const makeSelectCurrentUser = () =>
  createSelector(
    selectAppState,
    appState => appState.currentUser,
  );

const makeSelectAppState = () =>
  createSelector(
    selectAppState,
    appState => appState,
  );

const makeSelectToken = () =>
  createSelector(
    selectAppState,
    appState => appState.token,
  );

export { makeSelectCurrentUser, makeSelectAppState, makeSelectToken };
