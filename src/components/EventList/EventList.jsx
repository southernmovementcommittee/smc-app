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
    const router = useRouter()
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
                        <FlatList
                        data={events}    
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => navigation.navigate('EventsDetailsScreen', 
                                {
                                eventId: item.id, 
                                eventImage: item.image,
                                eventDate: item.date_time,
                                eventTime: item.time,
                                eventLocation: item.event_location,
                                eventTitle: item.event_title,
                                eventDescription: item.event_description,
                                })}>
                            <EventCard
                                event={event}
                                key={`upcoming-event-${event?.id}`}
                                navigation={navigation}
                                route={route}
                            />
                        </TouchableOpacity>

                        
                        )} 
                      />  
                            
                    )}
                </View>
            </View>
        </ScrollView>
    )
}

export default EventList