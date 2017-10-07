import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

const { setTested } = require('./actions/test').Creators;

class App extends Component<{}> {
    render() {
        console.log(this.props.setTested);
        return (
            <View>
                <Text>
                    Test status: {this.props.tested ? 'tested' : 'not tested'}
                </Text>
                <Button title='Set as tested' onPress={() => this.props.setTested()}/>
            </View>
        );
    }
}

export default connect(({ test }) => ({ tested: test.get('tested') }), { setTested })(App);