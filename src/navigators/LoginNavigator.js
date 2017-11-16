import React from 'react';
import {StackNavigator} from 'react-navigation';
import LoginPage from '../pages/LoginPage';
import PagesContainer from '../containers/PagesContainer';

export const createLoginNavigator = (authState) => StackNavigator({
    Login: {screen: LoginPage},
    AppNavigator: {screen: PagesContainer},
  }, {
    initialRouteName: authState ? 'AppNavigator' : 'Login',
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      header: null
    })
  }
);