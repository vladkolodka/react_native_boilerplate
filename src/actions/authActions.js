import { Creators } from '../constants/actionTypes';

export const login = (login, password) => (dispatch) => {
    dispatch(Creators.saveToken('12345'));
};

export const logout = (login, password) => (dispatch) => {
    dispatch(Creators.logout());
};