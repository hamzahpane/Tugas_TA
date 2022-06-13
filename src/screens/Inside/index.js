import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './Detailscreen';
import Filepribadi from './Filepribadi';

const Inside = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Filepribadi" component={Filepribadi} />
    </Stack.Navigator>
  );
};

export default Inside;
