import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from './LoginScreenCSS';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>LOG IN SCREEN</Text>
      <TextInput placeholder="Email Address" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TouchableOpacity  title="LOG IN" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};


export default LoginScreen;