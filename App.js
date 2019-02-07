import {
    createBottomTabNavigator,
    createAppContainer
  } from 'react-navigation';
import News from './src/components/News.js';
import Chat from './src/components/Chat.js';

const RootStack = createBottomTabNavigator(
    {
      News: {
          screen: News
      },
      Chat: {
          screen: Chat
      }
    });

const App = createAppContainer(RootStack);
export default App;
