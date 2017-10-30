import React from 'react';
// import { View } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { connect } from 'react-redux';
import { Button, Text, Container } from 'native-base';
import JournalListContainer from "../containers/JournalListContainer";

const { logout } = require('../actions/authActions').Creators;

const getOpenedJournalId = (state) => {
    if (state.params && state.params.journalId) {
        return state.params.journalId;
    }
    return -1;
};

const Component = (props) => {
    const action = () => {
        props.navigation.navigate('Empty', { journalId: 2 });
    };

    return <Container>
        <Button onPress={action}>
            <Text>Test</Text>
        </Button>

        {/* <DrawerItems {...props} style={{ flex: 1 }} /> */}
        <JournalListContainer navigation={props.navigation} id={getOpenedJournalId(props.navigation.state.routes[0])} />
        <Button full warning onPress={() => props.logout()}>
            <Text>Logout</Text>
        </Button>
    </Container>;
};

export default connect(null, { logout })(Component);