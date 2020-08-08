/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'react-native';
export default function Profile({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Profile Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Explore');
        }}
        title="Go to Explore"
      />
    </View>
  );
}