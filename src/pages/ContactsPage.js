import React from 'react';
import {Text, View} from 'react-native';
import indexStyles from '../styles';

export default ({navigation}) => {
  console.warn(navigation, 'Nav Contacts');
  return <View>
    <Text style={indexStyles.text}>Contacts page</Text>
    <Text style={indexStyles.textWithBackground}>Contacts page</Text>
  </View>;
};