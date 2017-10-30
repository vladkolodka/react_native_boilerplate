import React, { Component } from 'react';
import { View, Text } from "react-native";
import { connect } from "react-redux";

class JournalListContainer extends Component {
    render() {
        return (
            <View>
                <Text>Journals list</Text>
            </View>
        );
    }
}

export default connect(null, null)(JournalListContainer);