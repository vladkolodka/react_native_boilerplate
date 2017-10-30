import { all, call, takeEvery } from 'redux-saga/effects';
import initApi from '../api/mainApi';

import authSaga from './authSaga';
import startupSaga from './startupSaga';
import { loadJournals } from "./journalsSaga";

const { STARTUP, SET_API_URL } = require('../actions/commonActions').Types;
const { LOAD_JOURNALS_LIST } = require('../actions/journalActions').Types;

const api = initApi();

export default function* () {
    yield takeEvery([STARTUP, SET_API_URL], startupSaga, api);
    yield takeEvery(LOAD_JOURNALS_LIST, loadJournals, api);

    yield all([
        call(authSaga, api)
    ]);
}