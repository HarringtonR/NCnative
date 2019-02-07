import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style= {styles.container}>
      <Text style={ styles.textStyles }>{props.headerText}</Text>
    </View>
    )
}
const styles = {
  container: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, heigth: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
 textStyles: {
  fontSize: 20
 }
};

export { Header };
