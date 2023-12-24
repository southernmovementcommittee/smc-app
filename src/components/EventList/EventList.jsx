import { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from 'react-native'

import EventCard from '../EventCard/EventCard'

import mockData from '../../../MOCK_DATA'
import { ScrollView } from 'react-native-web'

const EventList = ({navigation, route}) => {
    const isLoading = false;
    const error = false;
    const data = mockData

    const [selectedEvent, setSelectedEvent] = useState()

    console.log(data)

    return (
        <ScrollView>
            <View>
                <View>
                    {isLoading ? (
                        <ActivityIndicator size="large" />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : (
                        data?.map((event) => (
                            <EventCard
                                event={event}
                                key={`upcoming-event-${event?.id}`}
                                navigation={navigation}
                                route={route}
                            />
                        ))
                            
                    )}
                </View>
            </View>
        </ScrollView>
    )
}

export default EventList