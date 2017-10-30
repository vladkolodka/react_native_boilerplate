import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import immutableTransform from 'redux-persist-transform-immutable';

import rootReducer from './reducers';
import mainSaga from './sagas';

export function configureStore(initialState, persistDataLoadedCallback) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(sagaMiddleware),
        autoRehydrate()
    ));

    if (module.hot) module.hot.accept(() => {
        store.replaceReducer(require('./reducers').default);
    });

    persistStore(store, {
        storage: AsyncStorage,
        whitelist: ['auth'],
        transforms: [immutableTransform()]
    }, persistDataLoadedCallback)/*.purge()*/;
    sagaMiddleware.run(mainSaga);
    return store;
}