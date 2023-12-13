import React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import { styles } from './HomeScreenCSS';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity style={styles.primaryButton} title="Auth Landing Screen" onPress={() => navigation.navigate('AuthLanding')}>
        <Text style={styles.primaryButtonText}>Auth Landing Screen</Text>
      </TouchableOpacity>
    </View>
  );
};



export default HomeScreen;
