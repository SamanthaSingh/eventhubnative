import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class DiscoverNow extends React.Component {
  static navigationOptions = {
    title: 'Discover Now',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>This is self discovery page.</Text>
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
});
