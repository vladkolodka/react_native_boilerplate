import { cancel, cancelled, fork, put, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { loadJournals } from "./journalsSaga";

const { LOGIN, LOGOUT } = require('../actions/authActions').Types;
const { saveToken, logout } = require('../actions/authActions').Creators;

const { SET_AUTH_ERROR } = require('../actions/authStateActions').Types;
const { setAuthProgressState, setAuthError, resetAuthState } = require('../actions/authStateActions').Creators;

function* loadInitialData(){
    yield fork(loadJournals);   
}

function* authorizeRequest(api, login, password) {
    try {
        yield put(resetAuthState({ state: true }));

        // TODO use api call
        yield delay(2000);

        if (login != 'vlad@mail.com' || password != '1111')
            throw new Error("Login or password is incorrect.");

        const token = `${login}${password}`;

        yield put(saveToken(token));

        yield fork(loadInitialData);

    } catch (error) {
        yield put(setAuthError(error.message));
    } finally {
        if (yield cancelled()) yield put(setAuthProgressState(false));
    }
}

export default function* loginFlow(api) {
    while (true) {
        const loginAction = yield take(LOGIN);

        const authRequestTask = yield fork(authorizeRequest, api, loginAction.login, loginAction.password);

        const action = yield take([LOGOUT, SET_AUTH_ERROR]);
       
        if (action.type === LOGOUT) yield cancel(authRequestTask);

        yield put(logout());
    }
}