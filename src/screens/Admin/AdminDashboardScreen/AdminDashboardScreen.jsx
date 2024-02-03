import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './AdminDashboardScreenCSS';
import EventCard from '../../../components/Admin/EventCard/EventCard';

const AdminDashboardScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
              
              <View style={styles.headerColumns}>
                <Text style={styles.headerText}>Member Count</Text>
                <View style={styles.headerBlocks}>
                  <Text style={styles.headerNumbers}>165</Text>
                </View>
              </View>

              <View style={styles.headerColumns}>
                <Text style={styles.headerText}>Members Attending %</Text>
                <View style={styles.headerBlocks}>
                  <Text style={styles.headerNumbers}>45%</Text>
                </View>
              </View>

            </View>
        </View>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </ScrollView>
      <TouchableOpacity style={styles.buttonContainer} title="Create New Event" onPress={() => navigation.navigate('CreateEvent') }>
        <Text style={styles.buttonText}>Create New Event</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminDashboardScreen;