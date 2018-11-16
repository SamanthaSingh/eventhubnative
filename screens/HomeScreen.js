import React from 'react';
import { AsyncStorage, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'


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

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      event_list: [],
      email: ''
    }

    this.loadEvents = this.loadEvents.bind(this);
    this.viewDetails = this.viewDetails.bind(this);

  }

  loadEvents() {
    let data = {
      date: this.state.date,
      email : this.state.email,
    }

    axios.post(`https://us-central1-testingexpress-216900.cloudfunctions.net/test/api/displayEvents`, { data })
      .then(res => {
        console.log(res.data);
        this.setState({event_list: res.data});
      })
    .catch((error) => {
      console.log(error);
    });
   
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if (value !== null) {
        // We have data!!
        console.log('VALUE OF EVENTID', value);
        this.setState({email: value}, function() {
        });
      }
     } catch (error) {
       console.log(error)
     }
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
  
  componentDidMount() {
    this._retrieveData();
    let month = '' + (this.state.date.getMonth() + 1);
    let day = '' + this.state.date.getDate();
    let year = this.state.date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    let formattedDate = ([year, month, day].join('-'));

    console.log(this.state.date);
    console.log(formattedDate);
    let data = {
      date: formattedDate,
      email : this.state.email,
    }

    axios.post(`https://us-central1-testingexpress-216900.cloudfunctions.net/test/api/displayEvents`, { data })
      .then(res => {
        console.log(res.data);
        this.setState({event_list: res.data});
      })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    console.log(this.state.event_list);
    return (
      <View style={styles.container}>
          
        <ScrollView>
        <DatePicker
        style={{width: 200 ,alignSelf:'center', marginTop: 20}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate= {new Date()}
        maxDate="2018-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date}, function() {
          this.loadEvents();
        })}}
      />
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
    backgroundColor: '#fff',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
  },
});


export default HomeScreen;