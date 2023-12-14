import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthStackNavigator } from './src/routes/AuthStackNavigator';
import React, { useState } from 'react';


import { Navbar } from './src/components/Navbar';

export const AuthContext = React.createContext();

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={(isAuth, setIsAuth)}>
      <NavigationContainer>
            <Navbar />
        
        {/* {
        isAuth ? (
            <Navbar />
        ) : (
            <AuthStackNavigator />
          )
        } */}
      </NavigationContainer>
    </AuthContext.Provider>
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