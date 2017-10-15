import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginPage from '../pages/LoginPage';
import AppSettingsPage from '../pages/AppSettingsPage';
import RootNavigator from '../navigators/RootNavigator';

export default createLoginNavigator = (authState) => StackNavigator({
    Login: { screen: LoginPage },
    RootNavigator: { screen: RootNavigator },
    AppSettings: {
        screen: AppSettingsPage
    }
}, {
    initialRouteName: authState ? 'RootNavigator' : 'Login',
    navigationOptions: {
        header: null
    }
});