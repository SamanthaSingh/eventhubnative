import React from 'react';
import { AsyncStorage, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';


export default class DiscoverNow extends React.Component {
  static navigationOptions = {
    title: 'Discover Now',
  };

  constructor(props) {
    super(props);
    this.state = {
      event_list: []
    }
    this.loadEvents = this.loadEvents.bind(this);
    this.viewDetails = this.viewDetails.bind(this);
  }

  componentDidMount() {
    this.loadEvents();
  }

  _storeData = async (eventId) => {
    console.log(typeof(eventId));
    try {
      await AsyncStorage.setItem('eventId', (eventId.toString()));
    } catch (error) {
      console.log(error);
    }
  }

  viewDetails(eventId) {
    console.log(eventId);
    this._storeData(eventId);
    this.props.navigation.navigate('App2', {
      eventId: eventId,
    });
  }

  loadEvents() {
    let data = {
      date: new Date()
    }
    axios.post(`https://us-central1-testingexpress-216900.cloudfunctions.net/test/api/getDiscoverNow/`, { data })
      .then(res => {
        this.setState({event_list : res.data});
        console.log(res.data);
      })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    console.log(this.props.navigation);
    return (
      <ScrollView style={styles.container}>
      {this.state.event_list.map(event =>
           <TouchableOpacity
           key={event.eventId}
           style={styles.button}
           onPress={() => { this.viewDetails(event.eventId) }}
         > 
            <Image
          style={{width: 200, height: 200, alignSelf:'center'}}
          source={{uri: event.eventPicture}}
        />
              <Text style={{alignSelf: 'center'}}>{event.eventTitle}</Text>  
       </TouchableOpacity>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
  },
});
