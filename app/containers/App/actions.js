import {
  ON_ADD_ALERT_MSG,
  ON_ADD_ERROR,
  ON_ADD_SUCCESS_MSG,
  ON_CHANGE_TAB,
  ON_LOAD_USER,
  ON_LOAD_USER_SUCCESS,
  ON_LOGOUT,
  ON_LOGOUT_ERROR,
  ON_LOGOUT_SUCCESS,
  ON_REMOVE_OLDEST_MESSAGE,
  ON_REMOVE_ONE_MESSAGE,
} from './constants';

export function attemptLogout(isForceLogout = false) {
  return {
    type: ON_LOGOUT,
    isForceLogout,
  };
}

export function logoutSuccessful() {
  return {
    type: ON_LOGOUT_SUCCESS,
  };
}

export function logoutFailed(error) {
  return {
    type: ON_LOGOUT_ERROR,
    error,
  };
}

export function loadUser() {
  return {
    type: ON_LOAD_USER,
  };
}

export function userLoaded(user) {
  return {
    type: ON_LOAD_USER_SUCCESS,
    user,
  };
}

export function throwMiscError(message) {
  return {
    type: ON_ADD_ERROR,
    message,
  };
}

export function throwSuccessMsg(message) {
  return {
    type: ON_ADD_SUCCESS_MSG,
    message,
  };
}

export function throwAlertMsg(message) {
  return {
    type: ON_ADD_ALERT_MSG,
    message,
  };
}

export function removeOldestMessage() {
  return {
    type: ON_REMOVE_OLDEST_MESSAGE,
  };
}

export function removeOneMessage(id) {
  return {
    type: ON_REMOVE_ONE_MESSAGE,
    id,
  };
}

export function setActiveTab(tab) {
  return {
    type: ON_CHANGE_TAB,
    tab,
  };
}

export function throwError(error) {
  const message = error.response ? error.response.data.message : error.message;
  return throwMiscError(message);
}
