import React from 'react';
import { Platform, View, StyleSheet, StatusBar } from 'react-native';

import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from './aws-exports'
Amplify.configure(AWSConfig)
import AppNavigator from './navigation/AppNavigator'
import Tabs from './Tabs'
import Routes from './Routes';


export default class App extends React.Component {
  state = {
    isAuthenticated: false
  }
  authenticate(isAuthenticated) {
    this.setState({ isAuthenticated })
  }
  render() {
    if (this.state.isAuthenticated) {
      console.log('Auth: ', Auth)
      return (
       
        
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      )
    }
    return (
      <View style={styles.container}>
      <StatusBar hidden />
        <Tabs
          screenProps={{
            authenticate: this.authenticate.bind(this)
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});