import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Home/index';
import Obrolan from '../Chat/index';
import Jadwal from '../Agenda/index';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 40,
          right: 40,
          elevation: 10,
          backgroundColor: 'white',
          borderRadius: 15,
          height: 50,
          shadowOpacity: 0.25,
          shadowRadius: 6,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Obrolan') {
            iconName = 'chatbubble-ellipses';
          } else if (route.name == 'Jadwal') {
            iconName = 'calendar';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',

        tabBarIconStyle: {
          fontFamily: 'Poppins-MediumItalic',
          fontSize: 20,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Obrolan" component={Obrolan} />
      <Tab.Screen name="Jadwal" component={Jadwal} />
    </Tab.Navigator>
  );
};

export default Tabs;
