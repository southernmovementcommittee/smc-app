import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './AuthLandingScreenCSS';
const smclogo = require('../../assets/images/smclogo.png');

const AuthLandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={smclogo} />
      </View>
        <TouchableOpacity style={styles.primaryButton} title="Admin Dashboard" onPress={() => navigation.navigate('AdminDashboard')}>
          <Text style={styles.primaryButtonText}>Admin Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} title="Login" onPress={() => navigation.navigate('Login')}>
          <Text style={styles.secondaryButtonText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton} title="Create Account" onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.primaryButtonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
    </View>
  );
};


export default AuthLandingScreen;