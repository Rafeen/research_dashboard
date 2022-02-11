/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourProject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourProject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ON_LOGOUT = 'app/App/ON_LOGOUT';
export const ON_LOGOUT_SUCCESS = 'app/App/ON_LOGOUT_SUCCESS';
export const ON_LOGOUT_ERROR = 'app/App/ON_LOGOUT_ERROR';

export const ON_LOAD_USER = 'app/App/ON_LOAD_USER';
export const ON_LOAD_USER_SUCCESS = 'app/App/ON_LOAD_USER_SUCCESS';
export const ON_LOAD_USER_ERROR = 'app/App/ON_LOAD_USER_ERROR';

export const ON_ADD_ERROR = 'app/App/ON_ADD_MISC_ERROR';
export const ON_ADD_SUCCESS_MSG = 'app/App/ON_ADD_SUCCESS_MSG';
export const ON_ADD_ALERT_MSG = 'app/App/ON_ADD_ALERT_MSG';
export const ON_ADD_INFO_MSG = 'app/App/ON_ADD_INFO_MSG';
export const ON_ACTIVE_SESSION_ERROR = 'app/App/ON_ACTIVE_SESSION_ERROR';

export const ON_CHANGE_TAB = 'app/App/ON_CHANGE_TAB';

export const ON_REMOVE_OLDEST_MESSAGE = 'app/App/ON_REMOVE_OLDEST_MESSAGE';
export const ON_REMOVE_ONE_MESSAGE = 'app/App/ON_REMOVE_ONE_MESSAGE';
