import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen/CreateAccountScreen';
import AuthLandingScreen from '../screens/AuthLandingScreen/AuthLandingScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" options={{ headerShown: false }} component={HomeScreen} />
      <Stack.Screen name="AuthLanding" options={{ headerShown: false }} component={AuthLandingScreen} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
      <Stack.Screen name="CreateAccount" options={{ headerShown: false }} component={CreateAccountScreen} />
    </Stack.Navigator>
  );
}