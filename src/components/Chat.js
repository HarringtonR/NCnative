import Login from './Login.js';
import Chatroom from './ChatRoom.js';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';


const root = createStackNavigator({
  Login: Login,
  Chatroom: Chatroom
});

const navigator = createAppContainer(root);
export default navigator;
