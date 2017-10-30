import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
    setCurrentJournal: ['journal'],
    setJournalsList: ['items'],
    loadJournal: ['id', 'date'],
    loadJournalsList: null
});