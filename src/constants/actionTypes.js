import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
    saveToken: [ 'token' ],
    logout: null
});