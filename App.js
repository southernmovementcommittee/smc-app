import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { Navbar } from './src/components/Navbar';


export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
