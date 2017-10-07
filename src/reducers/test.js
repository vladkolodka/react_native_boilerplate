import Immutable from 'immutable';
import { createReducer } from 'reduxsauce';

const { SET_TESTED } = require('../actions/test').Types;

const initialState = Immutable.fromJS({
    tested: false
});

export default createReducer(initialState, {
    [SET_TESTED]: (state, action) => state.set('tested', true)
});