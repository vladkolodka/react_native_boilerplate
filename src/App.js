import React, {Component} from 'react';
import { connect } from 'react-redux';

import createLoginNavigator from './navigators/LoginNavigator';

class App extends Component {
    render() {
        const LoginNavigator = createLoginNavigator(this.props.token !== null);
        return <LoginNavigator/>;
    }
}

const mapStateToProps = ({ auth }) => ({
    token: auth.get('token')
});

export default connect(mapStateToProps, null)(App);