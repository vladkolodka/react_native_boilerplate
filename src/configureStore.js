import { applyMiddleware, compose, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import immutableTransform from 'redux-persist-transform-immutable';

import rootReducer from './reducers';

export function configureStore(initialState, persistDataLoadedCallback) {
    const store = createStore(rootReducer, initialState, compose(
        autoRehydrate()
    ));

    if (module.hot) module.hot.accept(() => {
        store.replaceReducer(require('./reducers').default);
    });

    persistStore(store, {
        storage: AsyncStorage,
        whitelist: ['auth', 'journals'],
        transforms: [immutableTransform()]
    }, persistDataLoadedCallback)/* .purge() */;

    return store;
}