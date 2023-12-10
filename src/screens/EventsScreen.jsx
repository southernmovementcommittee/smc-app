import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventList from '../components/EventList/EventList';

const EventsScreen = () => {
  return (
    <View style={styles.container}>
      <EventList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
});

export default EventsScreen;
