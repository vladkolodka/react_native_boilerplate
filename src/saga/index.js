import { delay } from 'redux-saga';
import { takeLatest, all, call, spawn } from 'redux-saga/effects';
import test from './test';
import workWithApi from './workWithApi';
import api1 from '../api/testApi';

const { SAGA_TEST, LOAD_GISTS } = require('../actions/test').Types;

const githubApi = api1();

function* task1() {
    while (true) {
        yield delay(1000);
        console.log("task 1");
    }
}

function* task2() {
    while (true) {
        yield delay(1100);
        console.log("task 2");
    }
}

export default function* () {
    yield takeLatest(SAGA_TEST, test);
    yield takeLatest(LOAD_GISTS, workWithApi, githubApi);

    // yield all([
    //     call(task1),
    //     call(task2)
    // ]);
}