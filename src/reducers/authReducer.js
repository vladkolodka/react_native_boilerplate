import { createReducer } from 'reduxsauce';
import Immutable from 'immutable';

const { SAVE_TOKEN, LOGOUT, TEST } = require('../actions/authActions').Types;

const initialState = Immutable.fromJS({
    token: null
});

export default createReducer(initialState, {
    [SAVE_TOKEN]: (state, action) => state.set('token', action.token),
    [LOGOUT]: (state, action) => state.set('token', null)
});