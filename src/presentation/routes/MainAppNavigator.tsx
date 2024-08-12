import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import RecipeScreen from '../screens/recipe/RecipeScreen';

export type RootStackParams = {
  Home: undefined;
  Profile: undefined;
  Recipe: {recipeId: string};
};

const Stack = createStackNavigator<RootStackParams>();

const MainAppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
    </Stack.Navigator>
  );
};

export default MainAppNavigator;
