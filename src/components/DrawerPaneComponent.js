import React from 'react';
import { DrawerItems } from 'react-navigation';
import { connect } from 'react-redux';

const { logout } = require('../actions/authActions').Creators;

const Component = ({}) => {
    return <DrawerItems/>;
};

export default connect(null, { logout })(Component);