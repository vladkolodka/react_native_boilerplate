import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import mainSaga from './saga';

export function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

    if (module.hot) module.hot.accept(() => {
        store.replaceReducer(require('./reducers').default);
    });

    sagaMiddleware.run(mainSaga);
    return store;
}
