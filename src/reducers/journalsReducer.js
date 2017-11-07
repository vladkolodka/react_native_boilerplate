import { createReducer } from 'reduxsauce';
import Immutable from 'immutable';

const { SET_CURRENT_JOURNAL, SET_JOURNALS_LIST } = require('../actions/journalActions').Types;

const initialState = Immutable.fromJS({
    items: [],
    item: null
});

const journals = createReducer(initialState, {
    [SET_CURRENT_JOURNAL]: (state, action) => state.set('item', action.journalId),
    [SET_JOURNALS_LIST]: (state, action) => state.set('items', Immutable.List(action.items))
});

export { journals };