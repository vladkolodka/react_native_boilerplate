import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './src/App';
import { configureStore } from './src/configureStore';

const store = configureStore({});

const AppWithStore = () => <Provider store={store}>
    <App/>
</Provider>;

AppRegistry.registerComponent('djournal', () => AppWithStore);
