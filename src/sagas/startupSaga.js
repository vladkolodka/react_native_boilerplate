import { select, call } from 'redux-saga/effects';
const { SET_API_URL } = require('../actions/commonActions').Types;

export default function* startupSaga(api, action) {
    const data = (yield select(state => state.auth)).toObject();

    api.__setBaseUrl(data.apiUrl);
    if (action.type === SET_API_URL) return;

    api.__setAuthToken(data.token);

    if (!data.token) return;

    // yield call(loadJournals);
    // TODO load journals and other data
}