import { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from 'react-native'
import { useRouter } from 'expo-router'

import EventCard from '../EventCard/EventCard'

import mockData from '../../../MOCK_DATA'
import { ScrollView } from 'react-native-web'

const EventList = ({navigation, route}) => {
    const router = useRouter()
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
                            <TouchableOpacity onPress={() => navigation.navigate('EventsDetailsScreen', 
                            {
                                eventId: item.id, 
                                Title: item.event_title
                                })}>
                            <EventCard
                                event={item}
                                key={`upcoming-event-${item?.id}`}
                                navigation={navigation}
                                route={route}
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

{/* <ScrollView>
<View>
    {isLoading ? (
        <ActivityIndicator size="large" />
        ) : error ? (
            <Text>Something went wrong</Text>
            ) : (
                <FlatList
                event={events}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('EventDetails', { eventId: item.id })}>
                    <EventCard
                    event={item}
                    key={`upcoming-event-${item?.id}`}
                    navigation={navigation}
                    route={route}
                    />
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            />
            )}
</View>
</ScrollView> */}