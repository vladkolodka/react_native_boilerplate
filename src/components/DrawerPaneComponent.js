import React from 'react';
import {Button, View} from 'react-native';
import {DrawerItems} from 'react-navigation';
import {connect} from 'react-redux';

import {logout} from '../actions/authActions';

const Component = (props) => {
  return <View>
    <DrawerItems {...props} />
    <Button title='Logout' onPress={props.logout}/>
  </View>;
};

export default connect(null, {logout})(Component);