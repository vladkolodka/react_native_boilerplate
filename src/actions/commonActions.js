import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
    startup: null,
    setApiUrl: ['url'],
    deleteApiUrl: null
});