import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

export function configureStore(initialState, persistDataLoadedCallback) {
  const store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunk)
  ));

  if (module.hot) module.hot.accept(() => {
    store.replaceReducer(require('./reducers').default);
  });

  setTimeout(persistDataLoadedCallback, 1);

  return store;
}