const fallbackJournalTitle = 'Select journal';

export function createTitleForJournalData(journalRouteData){
    const journal = (journalRouteData || {}).currentJournal;
    if(journal == null) return fallbackJournalTitle;
    return journal.name + ' (' + ( journal.type ? 'Lecture' : 'Practice' ) + ')';
}

export function getParamsForJournalInfo(journal){
    return {
        currentJournal: {
            id: journal.id,
            type: journal.type,
            name: journal.name
        }
    };
}

export const getJournalIdFromParams = (params) => ((params || {}).currentJournal || {}).id;
export const isParamsHaveJournalData = (params) => params != null || params.currentJournal != null;