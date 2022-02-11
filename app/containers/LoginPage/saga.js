import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { ON_LOGIN } from './constants';
import {
  clearPostSuccessfulLogin,
  loginFailed,
  loginSuccess,
  toggleForceLoginModal,
} from './actions';
import {
  makeSelectIsForceLogin,
  makeSelectPassword,
  makeSelectUsername,
} from './selectors';
import api from '../../utils/api';
import { throwError } from '../App/actions';

/**
 * This function takes a username and password and makes an api call to the login action
 * to check if user is valid and password is not expired
 */
function* login() {
  const loginParams = {
    username: yield select(makeSelectUsername()),
    password: yield select(makeSelectPassword()),
    isForceLoginAttempt: yield select(makeSelectIsForceLogin()),
  };

  // Check if both credential fields are provided before attempting to dispatch to
  // backend.
  if (loginParams.username === '' || loginParams.password === '')
    yield put(
      loginFailed({ message: 'Please provide both username and password.' }),
    );
  else {
    try {
      const {
        payload: { user, token },
      } = yield call(api.user.login, loginParams);
      yield all([
        put(loginSuccess(user, token)),
        put(clearPostSuccessfulLogin()),
      ]);
    } catch (error) {
      if (error.response.data.message === 'Existing user session active.')
        yield put(toggleForceLoginModal());
      yield all([
        put(
          loginFailed(
            error.response ? error.response.data.message : error.message,
          ),
        ),
        put(throwError(error)),
      ]);
    }
  }
}

export default function* loginPageSaga() {
  yield takeLatest(ON_LOGIN, login);
}
