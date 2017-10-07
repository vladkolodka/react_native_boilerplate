import { takeLatest } from 'redux-saga/effects';
import test from './test';
import workWithApi from './workWithApi';
import api1 from '../api/testApi';

const { SAGA_TEST, LOAD_GISTS } = require('../actions/test').Types;

const githubApi = api1();

export default function* () {
    yield takeLatest(SAGA_TEST, test);
    yield takeLatest(LOAD_GISTS, workWithApi, githubApi);
}