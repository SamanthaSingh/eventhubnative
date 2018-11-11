import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import { createStackNavigator } from 'react-navigation';
import CreateEvent from '../screens/CreateEvent';
import { StackNavigator, SwitchNavigator } from 'react-navigation'; // 1.3.0




const AppStack = createStackNavigator({ CreateEvent: CreateEvent}, {Main:MainTabNavigator});

// export default createSwitchNavigator({
//   Main: MainTabNavigator,
//   AppStack: AppStack
// });

export default SwitchNavigator(
  {
    Main: MainTabNavigator,
    App: AppStack,
  },
  {
    initialRouteName: 'Main',
  }
);