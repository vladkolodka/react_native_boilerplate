import React from 'react';
import {
  Text, 
  View,
  Button
} from 'react-native';
import indexStyles from '../styles';

export default ({navigation}) => {
  console.warn(navigation, 'Nav');
  return (
    <View>
      <Text style={indexStyles.text}>Empty page</Text>
      <Text style={indexStyles.textWithBackground}>Empty page</Text>
      <Button 
        style={{
          marginTop: 10,
          marginHorizontal: '3%'
        }} 
        title='Go to Contacts' 
        onPress={() => {navigation.navigate('Contacts')}}
      />
    </View>
  );
};