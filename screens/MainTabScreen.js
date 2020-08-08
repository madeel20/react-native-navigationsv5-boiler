/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialBottomTabNavigator();
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

function MainTabScreen({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="white"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
            tabBarColor:'black',
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor:'brown',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="clipboard-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'blue',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor:'red',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cloud-search" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
 
export default MainTabScreen;

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
        component={HomeScreen}
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