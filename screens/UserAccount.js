import React from 'react';
import { Platform, ScrollView, StyleSheet, Button } from 'react-native';
import { ProfileStack } from '../navigation/UserNavigator';

export default class UserAccount extends React.Component {
  static navigationOptions = {
    title: 'User Account',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate('ProfileStack')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
  },
});
