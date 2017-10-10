import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

const { login, logout } = require('./actions/authActions').Creators;

class App extends Component {
    render() {
        console.log("RENDER::::PROPS", this.props);
        return (
            <View>
                <Text>Token: {this.props.token}</Text>

                <View style={{
                    flexDirection: 'row'
                }}
                >
                    <View style={{
                        width: '50%'
                    }}
                    >
                        <Button title='btn1' onPress={() => this.props.login('email@gmail.com', '12345')}/>
                    </View>
                    <View style={{
                        width: '50%'
                    }}
                    >
                        <Button title='btn2' onPress={this.props.logout}/>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
    token: auth.get('token')
});

export default connect(mapStateToProps, { login, logout })(App);