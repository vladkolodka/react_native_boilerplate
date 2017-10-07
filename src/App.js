import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

const { setTested, sagaTest } = require('./actions/test').Creators;

class App extends Component<{}> {
    render() {
        return (
            <View>
                <Text>
                    Test status: {this.props.tested ? 'tested' : 'not tested'}
                </Text>
                <Button title='Set as tested' onPress={() => this.props.setTested()}/>
                <Button title='Set as tested with delay' onPress={() => this.props.sagaTest()}/>
            </View>
        );
    }
}

export default connect(({ test }) => ({ tested: test.get('tested') }), { setTested, sagaTest })(App);