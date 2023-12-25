import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EventsScreen from '../screens/EventsScreen/EventsScreen';
import EventList from '../components/EventList/EventList';
import EventDetailsScreen from '../screens/EventsDetailScreen/EventsDetailScreen';


const Stack = createStackNavigator();

export const EventsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsStack" options={{ headerShown: false }} component={EventsScreen} />
      <Stack.Screen name="EventsListStack" options={{ headerShown: false }} component={EventList} />
      <Stack.Screen name="EventsDetailsScreen" options={{ headerShown: false }} component={EventDetailsScreen} />
    </Stack.Navigator>
  );
}