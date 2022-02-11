import { call, put, select, takeLatest } from 'redux-saga/effects';

import { ON_LOAD_USER, ON_LOGOUT } from './constants';
import {
  logoutFailed,
  logoutSuccessful,
  throwMiscError,
  userLoaded,
} from './actions';
import api from '../../utils/api';
import { makeSelectToken } from './selectors';

/**
 * Fetches logged in user
 *
 */
function* loadingUser() {
  const token = yield select(makeSelectToken());
  try {
    const {
      payload: { user },
    } = yield call(api.user.loadUser, token);
    yield put(userLoaded(user));
  } catch (error) {
    // WE NEED THE RESPONSE.DATA FROM THE BACKEND ERROR RESPONSE
    // TO ACCESS THE MESSAGE.
    yield put(throwMiscError(error));
  }
}

/**
 * Function logs user out
 *
 */
function* logout() {
  const token = yield select(makeSelectToken());
  try {
    // Wrapping API call in try catch for force logout reasons since force login on other session invalidates
    // current token and can no longer be used to complete API call here, we should still allow them to "log out"
    // on the front end client.
    try {
      if (localStorage.getItem('token')) yield call(api.user.logout, token);
    } catch (apiLogoutCallError) {
      yield put(
        throwMiscError(
          'Could not complete API call for logout. Check your connection or contact support',
        ),
      );
    }
    yield put(logoutSuccessful());
  } catch (error) {
    yield put(
      logoutFailed(
        error.response ? error.response.data.message : error.message,
      ),
    );
  }
}

export default function* appSaga() {
  yield takeLatest(ON_LOAD_USER, loadingUser);
  yield takeLatest(ON_LOGOUT, logout);
}
