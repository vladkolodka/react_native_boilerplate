import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

const { login } = require('../actions/authActions').Creators;

class LoginPage extends Component {
    render() {
        return <View>
            <Text>Token: {this.props.token}</Text>
            <Text>AuthInProgress: {this.props.authInProgress ? 'true' : 'false'}</Text>
            <Text>AuthErrorMessage: {this.props.authErrorMessage}</Text>

            <Button title='Login' onPress={() => this.props.login('email@gmail.com', '12345')}/>
            <Button title='Settings' onPress={() => this.props.navigation.navigate('AppSettings')}/>

        </View>;
    }
}

const mapStateToProps = ({ auth, authState }) => ({
    token: auth.get('token'),
    ...authState.toObject()
});

export default connect(mapStateToProps, { login })(LoginPage);