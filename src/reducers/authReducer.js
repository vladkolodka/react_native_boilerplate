import { createReducer } from '../helpers/tools';
import Immutable from 'immutable';

import { LOGOUT, SAVE_TOKEN } from '../actionTypes/authTypes';
// const { SET_AUTH_PROGRESS_STATE, SET_AUTH_ERROR, RESET_AUTH_STATE } = require('../actions/authStateActions').Types;

const initialAuth = Immutable.fromJS({
	token: null,
});

const auth = createReducer(initialAuth, {
	[SAVE_TOKEN]: (state, action) => state.set('token', action.token),
	[LOGOUT]: (state, action) => state.set('token', null)
});


const initialAuthState = Immutable.fromJS({
	authInProgress: false,
	authErrorMessage: null
});

const authState = createReducer(initialAuthState, {
	[SAVE_TOKEN]: (state, action) => state.set('authInProgress', false),
	// [SET_AUTH_PROGRESS_STATE]: (state, action) => state.set('authInProgress', action.state),
	// [SET_AUTH_ERROR]: (state, action) => state.merge({ authInProgress: false, authErrorMessage: action.errorMessage }),
	// [RESET_AUTH_STATE]: (state, action) => state.merge({ authInProgress: action.state, authErrorMessage: null })
});

export { auth, authState };