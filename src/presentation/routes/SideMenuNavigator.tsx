import {createDrawerNavigator} from '@react-navigation/drawer';
import MainAppNavigator from './MainAppNavigator';
import HomeScreen from '../screens/home/HomeScreen';

const Drawer = createDrawerNavigator();

const SideMenuNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={MainAppNavigator} />
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default SideMenuNavigator;
