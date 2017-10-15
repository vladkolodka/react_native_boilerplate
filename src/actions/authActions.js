import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
    login: ['login', 'password'],
    logout: null,
    saveToken: ['token']
});