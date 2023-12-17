import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './LoginScreenCSS';

const smclogo = require('../../assets/images/smclogo.png');


const LoginScreen = ({ navigation, setIsAuth }) => {
  return (
    <View style={styles.container}>
       <View style={styles.imageContainer}>
        <Image style={styles.image} source={smclogo} />
      </View>
      <View style={styles.header}>
      <Text style={styles.header}>LOG IN</Text>
      </View>
      <TextInput placeholder="EMAIL ADDRESS" style={styles.input} />
      <TextInput placeholder="PASSWORD" secureTextEntry style={styles.input} />
      <View>
        <TouchableOpacity
          style={styles.primaryButton}
          title="Login"
          onPress={() => setIsAuth(true)}
        >
          <Text style={styles.primaryButtonText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default LoginScreen;