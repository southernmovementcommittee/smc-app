import React from 'react';
import { View, Text, TouchableOpacity, Image  } from 'react-native';
import { styles } from './HomeScreenCSS';

const massassembly = require('../../assets/images/massassembly.jpg');

const HomeScreen = ({ user, setIsAuth }) => {
  return (
    <View style={styles.container}>
      <Image  source={massassembly} style={{width: 400, height: 400}}  />
      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Newly Created User</Text>
        <Text style={styles.text}>{JSON.stringify(user, null, 2)}</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={() => setIsAuth(false)}>
        <Text style={styles.primaryButtonText}>Reset Authentication</Text>
      </TouchableOpacity>
    </View>
  );
};



export default HomeScreen;
