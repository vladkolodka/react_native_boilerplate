import { call, put, take } from 'redux-saga/effects';

const { LOGIN, LOGOUT } = require('../actions/authActions').Types;
const { saveToken } = require('../actions/authActions').Creators;

function* getToken(email, password) {
    return `${email}${password}`;
}

export default function* () {
    while (true) {
        const action = yield take(LOGIN);

        const token = yield call(getToken, action.email, action.password);

        yield put(saveToken(token));

        yield take(LOGOUT);
    }
}