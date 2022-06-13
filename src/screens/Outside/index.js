import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Splash/index';
import Landing from './Landing/index';
import Login from './Login/index';

const Outside = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="landing" component={Landing} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default Outside;
