import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
    setAuthProgressState: ['state'],
    setAuthError: ['errorMessage'],
    resetAuthState: { state: false }
});