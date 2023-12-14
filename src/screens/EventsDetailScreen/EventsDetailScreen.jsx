import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl,
} from "react-native";

const EventDetailsScreen = ({route, navigation }) => {
    const { eventId, Title } = route.params;

    // const { itemId } = route.params.eventId?.id

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Event Details for: {eventId}</Text>
                <Text>{Title}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EventDetailsScreen