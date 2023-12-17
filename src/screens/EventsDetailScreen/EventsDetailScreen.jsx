import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    RefreshControl,
} from "react-native";

import styles from './EventsDetailScreenCss'


const EventDetailsScreen = ({route, navigation }) => {
    const { 
        eventId, 
        eventImage,
        eventTitle, 
        eventDate,
        eventTime,
        eventLocation,
        eventDescription,
    } = route.params;

    // const { itemId } = route.params.eventId?.id

    return (
            <ScrollView style={styles.container}>
                <View>
                    <View style={styles.eventHeaderContainer}>
                            <Image 
                                style={styles.logoImage}
                                source={{uri: eventImage}}
                                resizeMode="contain"
                            />
                        <View style={styles.eventDetailsContainer}>
                            <Text>Event Title: {eventTitle}</Text>
                            <Text>Event Date & Time: {eventDate} {eventTime}</Text>
                            <Text>Location: {eventLocation}</Text>
                        </View>
                    </View>

                    <View style={styles.eventDescription}>
                        <Text>Description</Text>
                        <Text>Event Description: {eventDescription}</Text>
                    </View>

                    <View style={styles.ticketCount}>
                        <Text>Details</Text>
                        <Text>General Admission: </Text>
                    </View>

                    <View style={styles.buttonFooter}>
                        <View style={styles.rsvpContainer}>
                            <Text>35</Text>
                        </View>
                        
                        <View>
                            <TouchableOpacity>
                                <Text>RSVP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
    )
}

export default EventDetailsScreen