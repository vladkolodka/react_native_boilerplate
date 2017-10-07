import Immutable from 'immutable';
import { createReducer } from 'reduxsauce';

const { SET_TESTED, SAVE_GISTS } = require('../actions/test').Types;

const initialState = Immutable.fromJS({
    tested: false,
    gists: []
});

export default createReducer(initialState, {
    [SET_TESTED]: (state, action) => state.set('tested', true),
    [SAVE_GISTS]: (state, action) => state.set('gists', Immutable.List.of(action.gists))
});