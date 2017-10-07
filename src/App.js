import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setTested } from './actions/test';

class App extends Component<{}> {
    render() {
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ setTested }, dispatch);

export default connect(({ test }) => ({ tested: test.tested }), mapDispatchToProps)(App);