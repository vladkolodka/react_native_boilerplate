import { all, call, takeEvery } from 'redux-saga/effects';
import initApi from '../api/mainApi';

import authSaga from './authSaga';
import startupSaga from './startupSaga';

const { STARTUP, SET_API_URL } = require('../actions/commonActions').Types;

const api = initApi();

export default function* () {
    yield takeEvery([STARTUP, SET_API_URL], startupSaga, api);

    yield all([
        call(authSaga, api)
    ]);
}