import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
    setTested: null,
    sagaTest: null,
    loadGists: null,
    saveGists: ['gists']
});