import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdminDashboardScreen from '../screens/Admin/AdminDashboardScreen/AdminDashboardScreen';
import EventCreationScreen from '../screens/Admin/EventCreationScreen/EventCreationScreen';

const Stack = createStackNavigator();

export const AdminDashStackNavigator = ({setIsAuth, setUser}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AdminDashboard" options={{ headerShown: false }}>
        {props => <AdminDashboardScreen {...props} setIsAuth={setIsAuth} setUser={setUser} />}
      </Stack.Screen>
      <Stack.Screen name="CreateEvent" options={{ headerShown: false }}>
        {props => <EventCreationScreen {...props} setIsAuth={setIsAuth} setUser={setUser} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}