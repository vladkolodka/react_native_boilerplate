import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import { getParamsForJournalInfo, getJournalIdFromParams, isParamsHaveJournalData } from '../helpers/journalNavigation';

const { setCurrentJournal } = require('../actions/journalActions').Creators;

class JournalPage extends Component {

    constructor(props) {
        super(props);

        if (props.item != null) props.navigation.setParams(getParamsForJournalInfo(props.item));
    }

    componentWillReceiveProps(nextProps) {
        if (isParamsHaveJournalData(nextProps.navigation.state.params))
            nextProps.setCurrentJournal(getJournalIdFromParams(nextProps.navigation.state.params));
    }


    render() {
        const { item } = this.props;

        return <View>
            <Text>{item == null ? 'no item' : item.name}</Text>
        </View>;
    }
}

const mapStateToProps = ({ journals }) => ({
    item: journals.get('item') == null ? null : journals.get('items').filter(j => j.id == journals.get('item')).first()
});

export default connect(mapStateToProps, { setCurrentJournal })(JournalPage);