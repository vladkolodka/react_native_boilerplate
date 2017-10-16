import React from 'react';
// import { View } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { connect } from 'react-redux';
import { Button, Text, Container } from 'native-base';

const { logout } = require('../actions/authActions').Creators;

const Component = (props) => <Container>
    <DrawerItems {...props} style={{ flex: 1 }} />
    <Button full warning onPress={() => props.logout()}>
        <Text>Logout</Text>
    </Button>
</Container>;

export default connect(null, { logout })(Component);