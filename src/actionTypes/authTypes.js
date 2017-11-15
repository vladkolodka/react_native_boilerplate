import { createActions, createTypes } from 'reduxsauce';

export const { Types, Creators } = createActions({
    SAVE_TOKEN: [ 'token' ],
    logout: null
});