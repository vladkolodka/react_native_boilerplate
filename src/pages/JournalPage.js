import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";

const { setCurrentJournal } = require('../actions/journalActions').Creators;

class JournalPage extends Component {

    constructor(props) {
        super(props);

        if (props.item != null)
            props.navigation.setParams({
                journalName: props.item.name,
                journalType: props.item.type
            });
    }

    componentWillReceiveProps(nextProps) {
        if ((nextProps.navigation.state.params || {}).journalId)
            nextProps.setCurrentJournal(nextProps.navigation.state.params.journalId);
    }


    render() {
        const { item } = this.props;
        console.log("Journal Page", this.props);

        return <View>
            <Text>{item == null ? 'no item' : item.name}</Text>

        </View>;
    }
}

const mapStateToProps = ({ journals }) => ({
    item: journals.get('item') == null ? null : journals.get('items').filter(j => j.id == journals.get('item')).first()
});

export default connect(mapStateToProps, { setCurrentJournal })(JournalPage);