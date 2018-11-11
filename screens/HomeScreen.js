import React from 'react';
import {  ScrollView, StyleSheet, Text, View, Platform } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';


const actions = [{
  text: 'Create Event',
  icon: require('../logo1.png'),
  name: 'Create Event',
  position: 1
},
];




class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Homepage',
  };

  render() {
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
          
        <ScrollView>
          <Text>This is Home</Text>
        </ScrollView>
        <FloatingAction
        actions={actions}
        onPressItem={() => this.props.navigation.navigate('App')}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  }
});


export default HomeScreen;