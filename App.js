import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import News from './src/components/News.js';
import Chat from './src/components/Chat.js';

const RootStack = createMaterialTopTabNavigator({
  News: News,
  Chat: Chat
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
});

const App = createAppContainer(RootStack);
export default App;
