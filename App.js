import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import News from './src/components/News.js';
import Login from './src/components/Login.js';
import ChatRoom from './src/components/ChatRoom.js';

const Chat = createStackNavigator({
  Login: {screen: Login },
  ChatRoom: { screen: ChatRoom}
  }
)

export default createAppContainer(createMaterialTopTabNavigator({
  News: {screen: News},
  Chat: { screen: Chat }
}, {
  tabBarPosition: 'bottom',
  initialRouteName: 'News',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#FFFFFF',
    style: {
        backgroundColor: '#303030',
    }
  },
}));
