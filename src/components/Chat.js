import Login from './Login.js';
import Chatroom from './ChatRoom.js';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';


export default createAppContainer(createStackNavigator({
  Login: { screen: Login },
  Chatroom: { screen: Chatroom }
}));
