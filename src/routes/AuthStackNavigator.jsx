import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen/CreateAccountScreen';
import AuthLandingScreen from '../screens/AuthLandingScreen/AuthLandingScreen';

const Stack = createStackNavigator();

export const AuthStackNavigator = ({setIsAuth, setUser}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthLanding" options={{ headerShown: false }} component={AuthLandingScreen} />
      <Stack.Screen name="Login" options={{ headerShown: false }}>
        {props => <LoginScreen {...props} setIsAuth={setIsAuth} setUser={setUser} />}
      </Stack.Screen>
      <Stack.Screen name="CreateAccount" options={{ headerShown: false }}>
        {props => <CreateAccountScreen {...props} setIsAuth={setIsAuth} setUser={setUser} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}