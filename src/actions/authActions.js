import {LOGOUT, SAVE_TOKEN} from '../actionTypes/authTypes';

export const login = (login, password) => (dispatch) => {
  dispatch({
    type: SAVE_TOKEN,
    token: '12345'
  });
};

export const logout = (login, password) => (dispatch) => {
  dispatch({
    type: LOGOUT
  });
};