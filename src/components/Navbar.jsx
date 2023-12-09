import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export const Navbar = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = "home";
          return <FontAwesomeIcon name={iconName} size={size} color={'black'} />;
        } else if (route.name === "Events") {
          iconName = "ticket";
          return (
            <FontAwesomeIcon name={iconName} size={25} color={'black'} />
          );
        }
      },
      tabBarStyle: {
        backgroundColor: '#FFD600',
      },
      tabBarShowLabel: false,
    })}
      
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Events' component={EventsScreen} />
    </Tab.Navigator>
  );
};
