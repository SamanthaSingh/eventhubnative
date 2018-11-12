import React from 'react';
import { AsyncStorage, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeaderBackButton } from "react-navigation";
import axios from 'axios';


export default class DiscoverNow extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Event Details',
            headerLeft: (<HeaderBackButton onPress={() => { navigation.navigate('Main') }} />)
        }
    }

    constructor(props) {
        super(props);
        this.loadEvent = this.loadEvent.bind(this);
        this.state = {
            event_list: [],
            eventId: '',
        }

    }
 
    loadEvent() {
        axios.get(`https://us-central1-testingexpress-216900.cloudfunctions.net/test/api/displayEvent/${this.state.eventId}`)
      .then(res => {
        this.setState({ event_list: res.data })
        console.log(res.data);
      })
      .catch(err => console.log(err));
    }

    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('eventId');
          if (value !== null) {
            // We have data!!
            console.log('VALUE OF EVENTID', value);
            this.setState({eventId: value}, function() {
                this.loadEvent();
            });
          }
         } catch (error) {
           console.log(error)
         }
      }

      componentDidMount() {
        this._retrieveData();
      }
        
      

  render() {
    console.log(this.props.navigation);

    return (
      <ScrollView style={styles.container}>
         {this.state.event_list.map(event =>
            <View style={styles.viewContainer} key={event.eventId}>
            <Image
          style={{width: 200, height: 200, alignSelf:'center'}}
          source={{uri: event.eventPicture}}
        />
              <Text style={{alignSelf: 'center'}} >{event.eventTitle}</Text>
              <Text style={{alignSelf: 'center'}} >{event.eventStartTime}</Text>
              <Text style={{alignSelf: 'center'}}>{event.eventEndTime}</Text>

              <Text style={{alignSelf: 'center'}}>{event.eventDescription}</Text>
              </View>
            
        )}
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
  viewContainer: {
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'center',
  }
});
