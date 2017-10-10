import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

function getLectionId(props) {
    return props.navigation.state.params ? props.navigation.state.params.id : props.initialId;
}

export default class LectionsPage extends Component {
    render() {
        console.log("LECTIONS", this.props);
        return <View>
            <Text>Lection {getLectionId(this.props)}</Text>
            <Button title='Test' onPress={() => this.props.navigation.navigate('Test')}/>
        </View>;
    }
}
