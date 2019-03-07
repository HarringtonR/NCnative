import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import Fire from '../../Fire.js';

class Chatroom extends Component {
    state ={
      messages: [],
    }

   static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

    componentDidMount() {
      const { navigation } = this.props;
      const room = navigation.getParam('room', this.props.room);

      const fireClass = Fire.shared;
      fireClass.assignChatID(room);
      fireClass.on(message => this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message)
      })));

      // Fire.shared.on(message =>
      //   this.setState(previousState => ({
      //     messages: GiftedChat.append(previousState.messages, message),
      //   }))
      // );
    }
    componentWillUnmount() {
      Fire.shared.off();
    }
    get user() {
      return {
        name: this.props.navigation.state.params.name,
        _id: Fire.shared.uid,
      };
    }




  render() {
    const { navigation } = this.props;
    const room = navigation.getParam('room', this.props.room);

    console.log(room)
    return (
      <View style={styles.chat}>
      <GiftedChat
        messages={ this.state.messages }
        onSend={Fire.shared.send}
        user={this.user}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  chat: {
    flex: 1
  }

});
export default Chatroom;
