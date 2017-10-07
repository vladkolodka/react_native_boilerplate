import { call, put } from 'redux-saga/effects';
const { saveGists } = require('../actions/test').Creators;

export default function* (api) {
    const gists = (yield call(api.allGists)).data;
    console.log(gists);
    yield put(saveGists(gists));
}