import React from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import store from './src/app/store';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'
import FavoritesScreen from './screens/Favorites'
import SearchScreen from './screens/Search'
import ProfileScreen from './screens/Profile'

export default function App() {
  // const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const [fontsIsLoaded] = useFonts({
    'benton-medium': require('./fonts/BentonSans-Medium.otf'),
    'benton-black': require('./fonts/BentonSans-Black.otf'),
    'benton-regular': require('./fonts/BentonSans-Regular.otf'),
    'benton-bold': require('./fonts/BentonSans-Bold.otf')
  })

  if (!fontsIsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
