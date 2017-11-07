import { put, select } from "redux-saga/effects";

const { SET_JOURNALS_LIST, SET_CURRENT_JOURNAL } = require('../actions/journalActions').Types;
const { setJournalsList } = require('../actions/journalActions').Creators;

const mockJournals = [
    {
        id: 0,
        name: 'Journal 1',
        type: 1,
        pages: [
            {
                date: new Date().toString(),
                items: [
                    {
                        userName: 'User1',
                        mark: 1,
                        comment: 'Comment'
                    },
                    {
                        userName: 'User2',
                        mark: 1,
                        comment: 'Comment'
                    }
                ]

            }
        ]
    },
    {
        id: 1,
        name: 'Journal 2',
        type: 0
    },
    {
        id: 2,
        name: 'Journal 3',
        type: 0
    },
    {
        id: 3,
        name: 'Journal 4',
        type: 1
    },
    {
        id: 4,
        name: 'Journal 5',
        type: 0
    },
    {
        id: 5,
        name: 'Journal 6',
        type: 0
    },
    {
        id: 6,
        name: 'Journal 7',
        type: 1
    },
    {
        id: 7,
        name: 'Journal 8',
        type: 0
    },
    {
        id: 8,
        name: 'Journal 9',
        type: 0
    },
    {
        id: 9,
        name: 'Journal 10',
        type: 0
    },
    {
        id: 10,
        name: 'Journal 11',
        type: 1
    }
];

export function* loadJournals(api) {
    // TODO call api
    yield put(setJournalsList(mockJournals));
}