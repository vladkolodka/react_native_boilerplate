import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
    setCurrentJournal: ['journalId'],
    setJournalsList: ['items'],
    loadJournal: ['id', 'date'],
    loadJournalsList: null
});