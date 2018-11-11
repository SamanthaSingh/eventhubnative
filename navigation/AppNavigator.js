import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import UserNavigator from './UserNavigator';
import { createStackNavigator } from 'react-navigation';
import CreateEvent from '../screens/CreateEvent';



const AppStack = createStackNavigator({ CreateEvent: CreateEvent});


export default createSwitchNavigator({
  Main: MainTabNavigator,
  AppStack: AppStack
});
