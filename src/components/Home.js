import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  render() {
    setTimeout(() =>{
      this.props.navigation.navigate('News')
    }, 2000);
    return (
      <View style={styles.container}>
        <Text>News and Chat</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});