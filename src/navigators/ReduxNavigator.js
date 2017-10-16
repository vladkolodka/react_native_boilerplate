import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginNavigator from './LoginNavigator';
import { createLoginNavigator } from './LoginNavigator';
import EmptyPage from '../pages/EmptyPage';

export default StackNavigator({
    Root: {
        screen: ({ screenProps }) => React.createElement(createLoginNavigator(screenProps.authState))
    },
    Test: { screen: EmptyPage }
}, {
        navigationOptions: {
            header: null
        }
    }
);