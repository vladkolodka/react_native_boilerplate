import { createStore } from 'redux';
import rootReducer from './reducers';

// TODO add enhancers
export function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    if (module.hot) module.hot.accept(() => {
        store.replaceReducer(require('./reducers').default);
    });

    return store;
}
