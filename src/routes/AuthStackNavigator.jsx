import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen/CreateAccountScreen';
import CreateAccountScreen2 from '../screens/CreateAccountScreen/CreateAccountScreen2';
import CreateAccountScreen3 from '../screens/CreateAccountScreen/CreateAccountScreen3';
import AuthLandingScreen from '../screens/AuthLandingScreen/AuthLandingScreen';

const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthLanding" options={{ headerShown: false }} component={AuthLandingScreen} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
      <Stack.Screen name="CreateAccount" options={{ headerShown: false }} component={CreateAccountScreen} />
      <Stack.Screen name="Step2" options={{ headerShown: false }} component={CreateAccountScreen2} />
      <Stack.Screen name="Step3" options={{ headerShown: false }} component={CreateAccountScreen3} />
    </Stack.Navigator>
  );
}