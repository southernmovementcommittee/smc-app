import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    Button,
    ActivityIndicator,
    TouchableOpacity,
    RefreshControl,
} from "react-native";

import styles from './EventsDetailScreenCss'
import Modal from "react-native-modal"


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

    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

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

                    <View style={styles.rsvpButtonFooter}>
                        <View style={styles.rsvpContainer}>
                            <Text>35</Text>
                        </View>
                        
                        <View>
                            <TouchableOpacity title="RSVP" style={{backgroundColor: 'black', width: 2, height: 2}} onPress={handleModal}/>
                        </View>
                    </View>

                    <Modal isVisible={isModalVisible}>
                        <View style={{ fex: 1 }}>
                            <Button title="Hide modal" onPress={handleModal}>Exit</Button>
                            <Text>Success</Text>
                            <Text>You have a successfully rsvp’d to our event. You should be receiving an email with your confirmation number and QRF code. Thank you for attending our event and have a bless day!</Text>
                        </View>
                    </Modal>

                </View>
            </ScrollView>
    )
}

export default EventDetailsScreen