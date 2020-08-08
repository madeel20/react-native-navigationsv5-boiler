/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'react-native';
export default function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Details');
        }}
        title="Go to Details"
      />
    </View>
  );
}
