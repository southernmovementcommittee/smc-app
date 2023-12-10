import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EventsScreen from '../screens/EventsScreen/EventsScreen';


const Stack = createStackNavigator();

export const EventsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsStack" options={{ headerShown: false }} component={EventsScreen} />
    </Stack.Navigator>
  );
}