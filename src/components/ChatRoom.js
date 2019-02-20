import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';


class Chatroom extends Component {
    state ={
      messages: [],
    }

    static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });


  render() {
    return (
    <GiftedChat
      messages={ this.state. messages }
      />
    );
  }
}


const styles = StyleSheet.create({});
export default Chatroom;
