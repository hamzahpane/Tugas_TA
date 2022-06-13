import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Tab, Outside, Notif, Profil, Details, FileScreen} from '../screens';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator
      initialRouteName="Outside"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Outside" component={Outside} />
      <Stack.Screen
        name="Home"
        component={Tab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Notif" component={Notif} />
      <Stack.Screen name="Profil" component={Profil} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="FileScreen" component={FileScreen} />
    </Stack.Navigator>
  );
};

export default index;
