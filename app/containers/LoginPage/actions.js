/*
 *
 * LoginPage actions
 *
 */

import {
  CHANGE_PASSWORD,
  CHANGE_USERNAME,
  CLEAR_CREDENTIALS,
  DEFAULT_ACTION,
  ON_LOGIN,
  ON_LOGIN_ERROR,
  ON_LOGIN_SUCCESS,
  TOGGLE_FORCE_LOGIN,
  TOGGLE_FORCE_LOGIN_MODAL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function attemptLogin(form) {
  return {
    type: ON_LOGIN,
    form,
  };
}

export function loginSuccess(user, token) {
  return {
    type: ON_LOGIN_SUCCESS,
    user,
    token,
  };
}

export function loginFailed(error) {
  return {
    type: ON_LOGIN_ERROR,
    error,
  };
}

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

export function clearPostSuccessfulLogin() {
  return {
    type: CLEAR_CREDENTIALS,
  };
}

export function toggleForceLoginModal() {
  return {
    type: TOGGLE_FORCE_LOGIN_MODAL,
  };
}

export function toggleForceLogin() {
  return {
    type: TOGGLE_FORCE_LOGIN,
  };
}
