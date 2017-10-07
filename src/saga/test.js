import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

const { setTested } = require('../actions/test').Creators;

export default function* () {
    yield delay(1000);
    yield put(setTested());
}