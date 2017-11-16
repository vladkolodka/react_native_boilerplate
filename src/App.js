import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReduxNavigator from './navigators/ReduxNavigator';
import {addNavigationHelpers} from 'react-navigation';

class App extends Component {
  render() {
    return <ReduxNavigator 
      screenProps={{authState: this.props.token !== null}}
       navigation={addNavigationHelpers({
         dispatch: this.props.dispatch,
         state: this.props.nav
       })}
    />;
  }
}

export default connect(({nav, auth}) => ({
  nav: nav,
  token: auth.get('token')
}), null)(App);