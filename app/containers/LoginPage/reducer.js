/* eslint-disable consistent-return */
/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import {
  CHANGE_PASSWORD,
  CHANGE_USERNAME,
  CLEAR_CREDENTIALS,
  ON_LOGIN,
  ON_LOGIN_ERROR,
  ON_LOGIN_SUCCESS,
  TOGGLE_FORCE_LOGIN,
  TOGGLE_FORCE_LOGIN_MODAL,
} from './constants';

export const initialState = {
  username: '',
  password: '',
  isLoading: false,
  isForceLogin: false,
  forceLoginModalIsVisible: false,
};

/* eslint-disable consistent-return, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.username = action.username;
        break;
      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;
      case CLEAR_CREDENTIALS:
        return initialState;
      case TOGGLE_FORCE_LOGIN_MODAL:
        draft.forceLoginModalIsVisible = !state.forceLoginModalIsVisible;
        break;
      case TOGGLE_FORCE_LOGIN:
        draft.isForceLogin = true;
        break;
      case ON_LOGIN:
        draft.isLoading = true;
        break;
      case ON_LOGIN_SUCCESS:
        draft.isLoading = false;
        break;
      case ON_LOGIN_ERROR:
        draft.isLoading = false;
        break;
      default:
        break;
    }
  });

export default loginPageReducer;
