import produce from 'immer';

import {
  ON_LOGIN,
  ON_LOGIN_ERROR,
  ON_LOGIN_SUCCESS,
} from '../LoginPage/constants';
import {
  ON_ACTIVE_SESSION_ERROR,
  ON_ADD_ALERT_MSG,
  ON_ADD_ERROR,
  ON_ADD_INFO_MSG,
  ON_ADD_SUCCESS_MSG,
  ON_CHANGE_TAB,
  ON_LOAD_USER,
  ON_LOAD_USER_ERROR,
  ON_LOAD_USER_SUCCESS,
  ON_LOGOUT,
  ON_LOGOUT_ERROR,
  ON_LOGOUT_SUCCESS,
  ON_REMOVE_OLDEST_MESSAGE,
  ON_REMOVE_ONE_MESSAGE,
} from './constants';

export const initialState = {
  loading: false,
  messages: [],
  currentUser: {},
  token: localStorage.getItem('token'),
  activeTab: '',
};

/* eslint-disable consistent-return, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ON_LOGIN:
        draft.loading = true;
        break;
      case ON_LOGIN_SUCCESS:
        localStorage.setItem('token', action.token);
        draft.loading = false;
        draft.currentUser = action.user;
        draft.token = action.token;
        break;
      case ON_LOGIN_ERROR:
        localStorage.clear();
        draft.intervalID = -1;
        draft.loading = false;
        draft.error = action.error;
        draft.token = null;
        draft.currentUser = initialState.currentUser;
        break;
      case ON_LOAD_USER:
        draft.loading = true;
        break;
      case ON_LOAD_USER_SUCCESS:
        draft.loading = false;
        break;
      case ON_LOAD_USER_ERROR:
        localStorage.clear();
        draft.loading = false;
        draft.error = action.error;
        draft.token = null;
        draft.currentUser = initialState.currentUser;
        break;
      case ON_LOGOUT:
        draft.loading = true;
        break;
      case ON_LOGOUT_SUCCESS:
        localStorage.clear();
        draft.loading = false;
        draft.currentUser = initialState.currentUser;
        draft.token = null;
        break;
      case ON_LOGOUT_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case ON_ACTIVE_SESSION_ERROR:
        localStorage.clear();
        draft.loading = false;
        draft.currentUser = initialState.currentUser;
        draft.token = null;
        break;
      case ON_ADD_ERROR:
        draft.messages = [
          ...draft.messages.splice(-4, 4),
          {
            message: action.message,
            type: 'error',
            id: Math.random().toString(20),
          },
        ];
        break;
      case ON_ADD_SUCCESS_MSG:
        draft.messages = [
          ...draft.messages.splice(-4, 4),
          {
            message: action.message,
            type: 'success',
            id: Math.random().toString(20),
          },
        ];
        break;
      case ON_ADD_ALERT_MSG:
        draft.messages = [
          ...draft.messages.splice(-4, 4),
          {
            message: action.message,
            type: 'alert',
            id: Math.random().toString(20),
          },
        ];
        break;
      case ON_ADD_INFO_MSG:
        draft.messages = [
          ...draft.messages.splice(-4, 4),
          {
            message: action.message,
            type: 'info',
            id: Math.random().toString(20),
          },
        ];
        break;
      case ON_REMOVE_OLDEST_MESSAGE:
        // eslint-disable-next-line no-case-declarations
        const tempList = draft.messages;
        tempList.shift();
        draft.messages = tempList;
        break;
      case ON_REMOVE_ONE_MESSAGE:
        // draft.messages = _.filter(
        //   draft.messages,
        //   message => message.id !== action.id,
        // );
        break;
      case ON_CHANGE_TAB:
        draft.activeTab = action.tab;
        break;
      default:
        break;
    }
  });

export default appReducer;
