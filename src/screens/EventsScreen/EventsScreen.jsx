import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './EventsScreenCSS';
import EventList from '../../components/EventList/EventList';

const EventsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <EventList
        navigation={navigation}
        route={route}
      />
    </View>
  );
};


export default EventsScreen;