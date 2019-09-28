import Category from './components/Category';
import Categories from './components/Categories';
import Shop from './components/Shop';
import Login from './components/Login';
import Profile from './components/Profile';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Categories: { screen: Categories },
  Category: { screen: Category },
  Shop: { screen: Shop },
  Profile: { screen: Profile }
});

const App = createAppContainer(MainNavigator);
export default App;
