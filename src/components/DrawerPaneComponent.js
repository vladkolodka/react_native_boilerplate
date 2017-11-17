import React from 'react';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';

const DrawerComponent = ({onRoute}) => {
  return (
      <View>
        <Button title='Contacts' onPress={() => {
          onRoute('Contacts');
        }}/>
        <Button title='Empty' onPress={() => {
          onRoute('Page');
        }}/>
      </View>
  );
};

export default DrawerComponent;