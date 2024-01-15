import React from 'react';
import { View, Text, TouchableOpacity, Image  } from 'react-native';
import { styles } from './HomeScreenCSS';
import { ScrollView } from 'react-native-gesture-handler';

const massassembly = require('../../assets/images/massassembly.jpg');

const HomeScreen = ({ user, setIsAuth }) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image  source={massassembly} style={styles.image} />
    <View style={styles.overlay}>
      <Text style={styles.overlayText}>STATEWIDE PEOPLE'S MOVEMENT ASSEMBLY</Text>
    </View>

      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Newly Created User</Text>
        <Text style={styles.text}>{JSON.stringify(user, null, 2)}</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={() => setIsAuth(false)}>
        <Text style={styles.primaryButtonText}>REGISTER TO EVENT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryButton} onPress={() => setIsAuth(false)}>
        <Text style={styles.primaryButtonText}>Reset Authentication</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};



export default HomeScreen;
