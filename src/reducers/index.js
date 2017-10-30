import { combineReducers } from 'redux';

import { auth, authState } from './authReducer';
import { nav } from './navReducer';
import { journals } from './journalsReducer';

export default combineReducers({ auth, authState, nav, journals });