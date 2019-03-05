import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import News from './src/components/News.js';
import Chat from './src/components/Chat.js';

export default createAppContainer(createMaterialTopTabNavigator({
  News: {screen: News},
  Chat: {screen: Chat},
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
