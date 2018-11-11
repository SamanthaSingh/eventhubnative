import React from 'react';
import {BackHandler, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import {HeaderBackButton} from "react-navigation";
import HomeScreen from './HomeScreen';

export default class CreateEvent extends React.Component {
//   static navigationOptions = {
//     title: 'Create Event',
//   };

static navigationOptions = ({navigation}) => {
    return{
      headerLeft:(<HeaderBackButton onPress={()=>{navigation.navigate('Main')}}/>)
   }
  }
  

  constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            typeOption: undefined,
            items: [
                {
                    label: 'Training or Workshop',
                    value: 'training or workshop',
                },
                {
                    label: 'Networking Event',
                    value: 'networking event',
                },
                {
                    label: 'Social Gathering',
                    value: 'social gathering',
                },
            ],
            topicOption: undefined,
            items2: [
                {
                    label: 'Science or Technology',
                    value: 'science or technology',
                },
                {
                    label: 'Business or Professional',
                    value: 'business or professional',
                },
                {
                    label: 'Film, Media or Entertainment',
                    value: 'film, media or entertainment',
                },
            ],
        };
    }

  state = {
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  

  render() {
    return (
      <ScrollView style={styles.container}>
      <TextInput placeholder={'Event Title'} style={styles.input} />
        <TextInput placeholder={'Event Location'} style={styles.input} />
        <TextInput placeholder={'Event Address'} style={styles.input} />
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Start at:</Text>
        </TouchableOpacity>
        <DateTimePicker isVisible={this.state.isDateTimePickerVisible} onConfirm={this._handleDatePicked} onCancel={this._hideDateTimePicker} />
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>End at:</Text>
        </TouchableOpacity>
        <DateTimePicker isVisible={this.state.isDateTimePickerVisible} onConfirm={this._handleDatePicked} onCancel={this._hideDateTimePicker} />
        <TextInput placeholder={'Event Summary (< 200 words)'} style={styles.input} />
        <TextInput placeholder={'Number Of Tickets'} keyboardType='numeric' style={styles.input} />
        <RNPickerSelect
            placeholder={{
                label: 'Select a type...',
                value: null,
            }}
            items={this.state.items}
            onValueChange={(value) => {
                this.setState({
                    typeOption: value,
                });
            }}
            onUpArrow={() => {
                this.inputRefs.name.focus();
            }}
            onDownArrow={() => {
                this.inputRefs.picker2.togglePicker();
            }}
            value={this.state.typeOption}
            ref={(el) => {
                this.inputRefs.picker = el;
            }}
        />
        <RNPickerSelect
            placeholder={{
                label: 'Select a topic...',
                value: null,
            }}
            items={this.state.items2}
            onValueChange={(value) => {
                this.setState({
                    topicOption: value,
                });
            }}
            onUpArrow={() => {
                this.inputRefs.picker.togglePicker();
            }}
            onDownArrow={() => {
                this.inputRefs.company.focus();
            }}
            value={this.state.topicOption}
            ref={(el) => {
                this.inputRefs.picker2 = el;
            }}
        />
        <Button title="Launch Event" />
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
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
