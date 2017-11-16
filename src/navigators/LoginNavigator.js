import React from 'react';
import {StackNavigator} from 'react-navigation';
import LoginPage from '../pages/LoginPage';
import AppNavigator from './AppNavigator';

export const createLoginNavigator = (authState) => StackNavigator({
      Login: {screen: LoginPage},
      AppNavigator: {screen: AppNavigator},
    }, {
      initialRouteName: authState ? 'AppNavigator' : 'Login',
      headerMode: 'float',
      navigationOptions: ({navigation}) => ({
        header: null
      })
    }
);