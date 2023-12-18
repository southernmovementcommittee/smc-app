import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = ({user, setIsAuth}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" options={{ headerShown: false }}>
        {props => <HomeScreen {...props} user={user} setIsAuth={setIsAuth} />}
      </Stack.Screen>
      {/* Other screens will go here that you expect to be able to navigate to exclusively from the home stack. */}
    </Stack.Navigator>
  );
}