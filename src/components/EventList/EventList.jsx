import { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    ScrollView
} from 'react-native'

import EventCard from '../EventCard/EventCard'

import mockData from '../../../MOCK_DATA'

const EventList = ({navigation, route}) => {
    const isLoading = false;
    const error = false;
    const events = mockData

    const [selectedEvent, setSelectedEvent] = useState()

    console.log(events)

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
                            <TouchableOpacity onPress={() => {
                                console.log(item.id, item.image)
                              navigation.navigate('EventsDetailsScreen', 
                                {
                                eventId: item.id, 
                                eventImage: item.image,
                                eventDate: item.date_time,
                                eventTime: item.time,
                                eventLocation: item.event_location,
                                eventTitle: item.event_title,
                                eventDescription: item.event_description,
                                })
                            }}
                            >
                            <EventCard
                                event={item}
                                navigation={navigation}
                            />
                        </TouchableOpacity>
                        )} 
                        keyExtractor={item => item.id.toString()}
                      />  
                            
                    )}
                </View>
            </View>
        </ScrollView>
    )
}

export default EventList