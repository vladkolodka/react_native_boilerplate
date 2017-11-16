import React from 'react';
import { StackNavigator } from 'react-navigation';
import { createLoginNavigator } from './LoginNavigator';

export default StackNavigator({
		Root: {
			screen: ({ screenProps }) => React.createElement(createLoginNavigator(screenProps.authState))
		}
	}, {
		navigationOptions: {
			header: null
		}
	}
);