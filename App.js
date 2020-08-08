/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: '#fff',
      headerLeft: () => (
        <Icon
          name="menu"
          size={25}
          color="white"
          style={{marginLeft: 10}}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}>
    <HomeStack.Screen
      name="Home"
      options={{
        title: 'Overview',
      }}
      component={Home}
    />
  </HomeStack.Navigator>
);
const DetailStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: '#fff',
      headerLeft: () => (
        <Icon
          name="menu"
          size={25}
          color="white"
          style={{marginLeft: 10}}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }}>
    <DetailsStack.Screen name="Detail" component={DetailScreen} />
  </DetailsStack.Navigator>
);
export function Home({navigation}) {
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
export function DetailScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details Screeen</Text>
      <Button
        onPress={() => {
          navigation.push('Details');
        }}
        title="Go to Details, Again"
      />
      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="Go to home"
      />
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Go back"
      />
      <Button
        onPress={() => {
          navigation.popToTop();
        }}
        title="Go to first screen"
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
