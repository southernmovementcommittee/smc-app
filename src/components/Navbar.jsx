import { HomeStackNavigator } from '../routes/HomeStackNavigator';
import { EventsStackNavigator } from '../routes/EventsStackNavigator';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const isAndroid = Platform.OS === 'android';
const isIphone = Platform.OS === 'ios';
let tabBarCSS;
if (isAndroid) {
  tabBarCSS = {
    backgroundColor: '#FFD600',
    height: 80,
  }
} else if (isIphone) {
  tabBarCSS = {
    backgroundColor: '#FFD600',
    height: 130,
    marginBottom: -30,
  }
}

export const Navbar = ({user, setIsAuth}) => {
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
      tabBarStyle: tabBarCSS,
      tabBarActiveBackgroundColor: '#000',
      tabBarInactiveBackgroundColor: '#FFD600',
      tabBarShowLabel: false,
    })}
    >
      {/* Only written this way to display user object for the time being... */}
      <Tab.Screen name='Home'>
        {props => <HomeStackNavigator {...props} user={user} setIsAuth={setIsAuth} />}
      </Tab.Screen>
      {/* <Tab.Screen name='Home' component={HomeStackNavigator} /> */}
      <Tab.Screen name='Events' component={EventsStackNavigator} />
    </Tab.Navigator>
  );
};
