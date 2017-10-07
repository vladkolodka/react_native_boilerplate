import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class EmptyPage extends Component{
    render(){
        console.log("EP", this.props);
        return <View>
            <Text>Page</Text>
        </View>;
    }
}
