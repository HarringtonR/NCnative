
import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Button } from 'react-native';


export default class Login extends React.Component {
  state = {
      name: '',
      room: ''
    }

onChangeText = name => this.setState({ name });
// onPress = () => { this.props.navigation.navigate('ChatRoom', { name: this.state.name, room: room });};

componentDidMount(){
  this.setState({
    room: this.props.navigation.getParam.room
  })
}

  render() {
    const { navigation } = this.props;
    const room = navigation.getParam('room', this.props.room);

    return (
      <View>
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Your Name"
          value={this.state.name}
          onChangeText={this.onChangeText}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatRoom', { name: this.state.name, room: room })}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <Text>Room: {room}</Text>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
      nameInput: { // 3. <- Add a style for the input
        height: offset * 2,
        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        borderWidth: 1,
      },
      title: { // 4.
          marginTop: offset,
          marginLeft: offset,
          fontSize: offset,
        },
        buttonText: { // 5.
          marginLeft: offset,
          fontSize: offset,
        },
 });
