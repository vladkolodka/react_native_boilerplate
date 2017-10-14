import { createReducer } from 'reduxsauce';
import Immutable from 'immutable';

const { SAVE_TOKEN, LOGOUT } = require('../actions/authActions').Types;
const { SET_AUTH_PROGRESS_STATE, SET_AUTH_ERROR, RESET_AUTH_STATE } = require('../actions/authStateActions').Types;
const { SET_API_URL, DELETE_API_URL } = require('../actions/commonActions').Types;


const initialAuth = Immutable.fromJS({
    token: null,
    apiUrl: null
});

const auth = createReducer(initialAuth, {
    [SAVE_TOKEN]: (state, action) => state.set('token', action.token),
    [LOGOUT]: (state, action) => state.set('token', null),
    [SET_API_URL]: (state, action) => state.set('apiUrl', action.url),
    [DELETE_API_URL]: (state, action) => state.set('apiUrl', null)
});


const initialAuthState = Immutable.fromJS({
    authInProgress: false,
    authErrorMessage: null
});

const authState = createReducer(initialAuthState, {
    [SAVE_TOKEN]: (state, action) => state.set('authInProgress', false),
    [SET_AUTH_PROGRESS_STATE]: (state, action) => state.set('authInProgress', action.state),
    [SET_AUTH_ERROR]: (state, action) => state.merge({authInProgress: false, authErrorMessage: action.errorMessage}),
    [RESET_AUTH_STATE]: (state, action) => state.merge({authInProgress: action.state, authErrorMessage: null})
});

export { auth, authState };