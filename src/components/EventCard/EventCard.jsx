import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';

import styles from './EventCardCss';

const EventCard = ({event, selectedEvent, navigation: {navigate}}) => {
    return (
        // create onpress that leads to details page
            <TouchableOpacity 
            style={styles.container}
            onPress={() => navigate('event-details', { eventId: event?.id })}
            >
                <View style={styles.logoContainer}>
                    <Image 
                        source={{uri: event?.image}}
                        resizeMode="contain"
                        style={styles.logoImage}
                    />
                </View>
                <View style={styles.eventDetailsContainer}>
                    <View style={styles.eventDetailsHeader}>
                        <Text style={styles.fontHeader}>{event?.event_title}</Text>
                    </View>
                    <View style={styles.eventDetailsBody}>
                        <Text style={styles.fontTextAlt}>Date: {event?.date_time}</Text>
                        <Text style={styles.fontText}>Location: {event?.event_location}</Text>
                        <Text style={styles.fontText}>Event Availability</Text>
                    </View>
                </View>
            </TouchableOpacity>
    )
}

export default EventCard