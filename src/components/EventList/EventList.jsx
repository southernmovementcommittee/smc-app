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

const EventList = () => {
    const router = useRouter()
    const isLoading = false;
    const error = false;

    return (
        <View>
            <View>
                {isLoading ? (
                    <ActivityIndicator size="large" />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8]}
                        renderItem={() => (
                            <EventCard

                            />
                        )}
                    />
                )}
            </View>
        </View>
    )
}

export default EventList