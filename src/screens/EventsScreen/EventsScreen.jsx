import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './EventsScreenCSS';

const EventsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Events Screen</Text>
    </View>
  );
};


export default EventsScreen;