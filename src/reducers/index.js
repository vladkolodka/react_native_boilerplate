import { combineReducers } from 'redux';

import { auth, authState } from './authReducer';
// import { navReducer } from './navReducer';

export default combineReducers({ auth, authState/*, navReducer */});