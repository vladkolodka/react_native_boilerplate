import { createReducer } from '../utils/main';

const { TEST } = require('../constants/actionTypes.json');

const initialState = {
    tested: false
};

export default createReducer(initialState, {
    [TEST]: (state, action) => ({ tested: true })
});