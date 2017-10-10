import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
    login: ['email', 'password'],
    logout: null,
    saveToken: ['token']
});