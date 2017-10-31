import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from "react-native";
import { connect } from "react-redux";

class JournalListContainer extends Component {
    render() {
        return (
            <View>
                {this.props.journals.map((j, i) => <TouchableHighlight onPress={() => {
                    this.props.navigation.navigate('_Journal', { journalId: i })
                }} key={i}>
                    <Text>{j.name}</Text>
                </TouchableHighlight>)}
            </View>
        );
    }
}

export default connect(({ journals }) => ({
    journals: journals.get('items').toJS()
}), null)(JournalListContainer);