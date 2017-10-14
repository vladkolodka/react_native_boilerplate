import { cancel, fork, put, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';

const { LOGIN, LOGOUT } = require('../actions/authActions').Types;
const { saveToken, logout } = require('../actions/authActions').Creators;

const { AUTH_ERROR } = require('../actions/authStateActions').Types;
const { setAuthProgressState, setAuthError, resetAuthState } = require('../actions/authStateActions').Creators;

function* authorizeRequest(api, email, password) {
    try {
        yield put(resetAuthState({ state: true }));

        // TODO use api call
        yield delay(2000);
        const token = `${email}${password}`;

        yield put(saveToken(token));

    } catch (error) {
        yield put(setAuthError(error));
    } finally {
        yield put(setAuthProgressState(false));
    }
}

export default function* loginFlow(api) {
    while (true) {
        const loginAction = yield take(LOGIN);

        const authRequestTask = yield fork(authorizeRequest, api, loginAction.email, loginAction.password);

        const action = yield take([LOGOUT, AUTH_ERROR]);

        if (action.type === LOGOUT) yield cancel(authRequestTask);
        yield call(logout());
    }
}