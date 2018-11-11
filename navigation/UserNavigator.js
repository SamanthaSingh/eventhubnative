import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Profile from '../screens/Profile';
import MyEvents from '../screens/MyEvents';
import CreateEvent from '../screens/CreateEvent';




const CreateEventStack = createStackNavigator({
  CreateEvent: CreateEvent,
});

export default createStackNavigator({
  CreateEventStack
});
