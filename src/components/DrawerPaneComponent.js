import React from 'react';
import {Button, View} from 'react-native';
import {DrawerItems} from 'react-navigation';
import {connect} from 'react-redux';

const DrawerComponent = ({ onRoute }) => {
  return (
    <View>
      <Button title='Logout' onPress={() => { 
        onRoute('close'); 
      }}/>
    </View>
  );
};

export default DrawerComponent;