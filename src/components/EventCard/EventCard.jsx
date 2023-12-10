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

const EventCard = () => {
    return (
        // create onpress that leads to details page
            <TouchableOpacity style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../../assets/images/SMC_logo.png')}
                        resizeMode="contain"
                        style={styles.logoImage}
                    />
                </View>
                <View style={styles.eventDetailsContainer}>
                    <View style={styles.eventDetailsHeader}>
                        <Text>Event Title</Text>
                    </View>
                    <View style={styles.eventDetailsBody}>
                        <Text style={{fontFamily: 'DrukWide-Bold-Trial'}}>Event Date</Text>
                        <Text>Event Location</Text>
                        <Text>Event Availability</Text>
                    </View>
                </View>
                
            </TouchableOpacity>
    )
}

export default EventCard