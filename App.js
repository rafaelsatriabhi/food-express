import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import store from './src/app/store';
import MediumText from './components/texts/MediumText';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Search from './screens/Search';

export default function App() {
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
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeScreen" component={Home} />
          <Stack.Screen name="SearchScreen" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyleFocused: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  boxIconStyleFocused: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(83, 232, 139, 0.25)',
    alignItems: 'center',
    paddingHorizontal: 17,
    borderRadius: 12,
  },
  boxIconStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    borderRadius: 12,
  },
})