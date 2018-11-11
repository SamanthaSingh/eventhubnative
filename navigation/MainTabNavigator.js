import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DiscoverNow from '../screens/DiscoverNow';
import Search from '../screens/Search';
import UserAccount from '../screens/UserAccount';
import CreateEvent from '../screens/CreateEvent';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const DiscoverNowStack = createStackNavigator({
  Discover: DiscoverNow,
});

DiscoverNowStack.navigationOptions = {
  tabBarLabel: 'Discover Now',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-time' : 'md-time'}
    />
  ),
};

const SearchStack = createStackNavigator({
  Search: Search,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};



const UserAccountStack = createStackNavigator({
  Account: UserAccount,
});

UserAccountStack.navigationOptions = {
  tabBarLabel: 'User Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
    />
  ),
};




export default createBottomTabNavigator({
  HomeStack,
  DiscoverNowStack,
  SearchStack,
  UserAccountStack,
});
