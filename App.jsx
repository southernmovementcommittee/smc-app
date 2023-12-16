import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from './src/routes/AuthStackNavigator';
import React, { useState } from 'react';


import { Navbar } from './src/components/Navbar';

export const AuthContext = React.createContext();

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
      <NavigationContainer>
        {
        isAuth ? (
            <Navbar />
        ) : (
            <AuthStackNavigator setIsAuth={setIsAuth} />
          )
        }
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
