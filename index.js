import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './src/App';
import LeftDrawer from './src/navigators/LeftDrawer';
import { configureStore } from './src/configureStore';

const store = configureStore({});

const AppWithStore = () => <Provider store={store}>
    {/*<App/>*/}
    <LeftDrawer screenProps={{lections: [1, 2, 3]}} />
</Provider>;

AppRegistry.registerComponent('djournal', () => AppWithStore);
