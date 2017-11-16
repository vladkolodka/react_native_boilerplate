import {combineReducers} from 'redux';

import {auth, authState} from './authReducer';
import {nav} from './navReducer';

export default combineReducers({auth, authState, nav});