import React, { Component } from 'react';
import { connect } from 'react-redux';

const { setApiUrl } = require('../actions/commonActions').Creators;

class AppSettingsPage extends Component {
    render() {
        return null;
    }
}

const mapStateToProps = ({ auth }) => ({
    apiUrl: auth.get('apiUrl')
});

export default connect(mapStateToProps, { setApiUrl })(AppSettingsPage);