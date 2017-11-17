import React from 'react';
import { Button, Text, View } from 'react-native';
import indexStyles from '../styles';
import { NavigationActions } from 'react-navigation';

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
            onPress={() => {
              const navigateAction = NavigationActions.navigate({
                routeName: 'Contacts',
                params: {},
              });

              navigation.dispatch(navigateAction);
            }}
        />
      </View>
  );
};