import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl,
} from "react-native";

import mockData from "../../../../MOCK_DATA";

const JobDetails = () => {
    const params = useGlobalSearchParams();
    const router = useRouter();

    const { data, isLoading, error, } = mockData("event-details", { id: params.id })

    return (
        <SafeAreaView>
            <Stack.Screen
                name="event-details"
                component={id}
                options={({ route }) => ({
                    title: route.params.eventId,
                })}
            />
            <ScrollView>

            </ScrollView>
        </SafeAreaView>
    )
}

export default JobDetails