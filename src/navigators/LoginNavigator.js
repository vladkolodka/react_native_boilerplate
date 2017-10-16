import React, { Component } from 'react';
import { StackNavigator, withNavigation } from 'react-navigation';

import LoginPage from '../pages/LoginPage';
import AppSettingsPage from '../pages/AppSettingsPage';
import AppNavigator from './AppNavigator';
import { connect } from 'react-redux';

createLoginNavigator = (authState) => StackNavigator({
    Login: { screen: LoginPage },
    AppNavigator: { screen: AppNavigator },
    AppSettings: {
        screen: AppSettingsPage
    }
}, {
        initialRouteName: authState ? 'AppNavigator' : 'Login',
        navigationOptions: {
            header: null
        }
    });

class LoginNavigatorWrapper extends Component {
    render() {
        const LoginNavigator = createLoginNavigator(this.props.token !== null);
        return <LoginNavigator />;
    }
}

export default connect(({ auth }) => ({
    token: auth.get('token')
}), null)(LoginNavigatorWrapper);