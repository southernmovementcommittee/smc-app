import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from './src/routes/AuthStackNavigator';
import React, { useState } from 'react';


import { Navbar } from './src/components/Navbar';
import { AdminDashStackNavigator } from './src/routes/AdminDashStackNavigator';

export const AuthContext = React.createContext();

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeContainer}>
        {
        isAuth ? (
            <Navbar setIsAuth={setIsAuth} user={user} />
        ) : (
              <AdminDashStackNavigator />
          )
        }
        {/* <AuthStackNavigator setIsAuth={setIsAuth} setUser={setUser} /> */}
        {/* <AdminDashStackNavigator /> */}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFD600',
    // backgroundColor: '#000',
  },
});
