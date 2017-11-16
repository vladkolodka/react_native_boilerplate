import { StackNavigator } from 'react-navigation';
import EmptyPage from '../pages/EmptyPage';
import ContactsPage from '../pages/ContactsPage';
import ScalingDrawer from 'react-native-scaling-drawer';
import DrawerComponent from '../components/DrawerPaneComponent';

const AppNivagtor = StackNavigator({
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
import {connect} from 'react-redux';

import {login} from '../actions/authActions';

class PagesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.onRoute = this.onRoute.bind(this);
  }

  onRoute() {
    this._drawer.close();
    this.props.navigation.navigate('Contacts');
  }

  render() {
    console.warn('nav props', this.props);
    return (
      <View style={{flex: 1}}>
        <ScalingDrawer
          ref={ref => this._drawer = ref}
          content={<DrawerComponent onRoute = {this.onRoute} />}
          {...defaultScalingDrawerConfig}
          onClose={() => console.log('close')}
          onOpen={() => console.log('open')}
        >
          <AppNivagtor/>
        </ScalingDrawer>
      </View>
    );
  }
}

PagesContainer.router = AppNivagtor.router;

const mapStateToProps = ({auth, authState}) => ({
  token: auth.get('token'),
  ...authState.toObject()
});

export default connect(mapStateToProps, {login})(PagesContainer);