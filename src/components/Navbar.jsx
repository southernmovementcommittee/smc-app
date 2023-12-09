import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export const Navbar = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;
        size = 40
        color = focused ? '#FFD600' : '#000';

        if (route.name === 'Home') {
          iconName = 'home';
          return <FontAwesomeIcon name={iconName} size={size} color={color} />;
        } else if (route.name === 'Events') {
          iconName = 'ticket';
          return (
            <FontAwesomeIcon name={iconName} size={size} color={color} />
          );
        }
      },
      tabBarStyle: {
        backgroundColor: '#FFD600',
        
        // style 1 - without yellow space on bottom
        // height: 130,
        // marginBottom: -30

        // style 2 - with yellow space on bottom
        height: 100,
      },
      tabBarActiveBackgroundColor: '#000',
      tabBarInactiveBackgroundColor: '#FFD600',
      tabBarShowLabel: false,
    })}
      
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Events' component={EventsScreen} />
    </Tab.Navigator>
  );
};
