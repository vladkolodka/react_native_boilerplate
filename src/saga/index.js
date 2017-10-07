import { takeLatest } from 'redux-saga/effects';
import test from './test';

const { SAGA_TEST } = require('../actions/test').Types;

export default function* () {
    yield takeLatest(SAGA_TEST, test);
}