import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './src/App';
import { configureStore } from './src/configureStore';

const store = configureStore({});

const AppWithStore = () => <Provider store={store}>
    <App/>
    {/*<LeftDrawer parentNav={{ff: 'tt'}} screenProps={{lections: [1, 2, 3]}} />*/}
</Provider>;

AppRegistry.registerComponent('djournal', () => AppWithStore);
