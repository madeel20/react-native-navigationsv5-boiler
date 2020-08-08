/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'react-native';
export default function Explore({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Explore Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="Go to Home "
      />
    </View>
  );
}