
import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

class Login extends React.Component {
  state ={
    name: ''
  }


onChangeText = name => this.setState({ name });
onPress = () => { this.props.navigation.navigate('Chatroom', { name: this.state.name });};

  render() {
    return (
      <View>
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="John Cena"
          value={this.state.name}
          onChangeText={this.onChangeText}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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


export default Login;