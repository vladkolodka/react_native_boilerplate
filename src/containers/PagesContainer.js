import { StackNavigator } from 'react-navigation';
import EmptyPage from '../pages/EmptyPage';
import ContactsPage from '../pages/ContactsPage';
import ScalingDrawer from 'react-native-scaling-drawer';
import DrawerComponent from '../components/DrawerPaneComponent';
import { NavigationActions } from 'react-navigation';
import ReduxNavigator from '../navigators/ReduxNavigator';

const AppNavigator = StackNavigator({
    Page: {
      screen: EmptyPage
    },
    Contacts: {
      screen: ContactsPage
    }
  }, {
    initialRouteName: 'Page'
  }
);


let defaultScalingDrawerConfig = {
  scalingFactor: 0.6,
  minimizeFactor: 0.6,
  swipeOffset: 20
};

import React, {Component} from 'react';
import {Button, Image, Text, TextInput, View} from 'react-native';

import LogoImage from "../components/LogoImage";
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import { addNavigationHelpers } from 'react-navigation';

class PagesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.onRoute = this.onRoute.bind(this);
  }

  onRoute(routeName) {
    this._drawer.close();

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName })
      ]
    })

    this.props.navigation.dispatch(resetAction);

  }

  render() {
    console.warn('nav props', this.props.navigation);
    return (
      <View style={{flex: 1}}>
        <ScalingDrawer
          ref={ref => this._drawer = ref}
          content={<DrawerComponent onRoute = {this.onRoute} />}
          {...defaultScalingDrawerConfig}
          onClose={() => console.log('close')}
          onOpen={() => console.log('open')}
        >
          <View style={{flex: 1, elevation: 20}}>
            <AppNavigator navigation={this.props.navigation} />
          </View>
        </ScalingDrawer>
      </View>
    );
  }
}

PagesContainer.router = AppNavigator.router;

const mapStateToProps = ({auth, authState, nav}) => ({
  nav,
  token: auth.get('token'),
  ...authState.toObject()
});

export default connect(mapStateToProps, {login})(PagesContainer);