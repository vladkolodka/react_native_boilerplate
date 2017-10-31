import { put } from "redux-saga/effects";

const { SET_JOURNALS_LIST } = require('../actions/journalActions').Types;
const { setJournalsList } = require('../actions/journalActions').Creators;

const mockJournals = [
    {
        name: 'Journal 1',
        type: 1
    },
    {
        name: 'Journal 2',
        type: 0
    }
];

export function* loadJournals(api) {
    // TODO call api
    yield put(setJournalsList(mockJournals));
}