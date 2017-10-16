import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginPage from '../pages/LoginPage';
import AppSettingsPage from '../pages/AppSettingsPage';
import AppNavigator from './AppNavigator';

export const createLoginNavigator = (authState) => StackNavigator({
    Login: { screen: LoginPage },
    AppNavigator: { screen: AppNavigator },
    AppSettings: {
        screen: AppSettingsPage
    }
}, {
        initialRouteName: authState ? 'AppNavigator' : 'Login',
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
        })
    }
);