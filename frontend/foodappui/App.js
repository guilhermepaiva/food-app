import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, Button, View } from 'react-native';

import Home from './components/Home';

import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Details from './components/Details';


Icon.loadFont();



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Details"component={Details} options={{ headerShown:  false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 60,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: "Montserrat-Regular",
    color: colors.secondary,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
