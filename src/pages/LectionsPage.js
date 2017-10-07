import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LectionsPage extends Component{
    render(){
        console.log("LECTIONS", this.props);
        return <View>
            <Text>Lection {this.props.navigation.state.params.id}</Text>
        </View>;
    }
}
