import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Notif({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" backgroundColor="#B01116" />

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#B01116',
          paddingVertical: 20,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          elevation: 10,
        }}>
        <TouchableOpacity>
          <AntDesign
            name="left"
            size={24}
            color="white"
            style={{marginTop: 25, marginLeft: 30}}
            onPress={function () {
              navigation.replace('Home');
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            fontFamily: 'Poppins-Medium',
            fontWeight: '700',
            fontSize: 24,
            color: 'white',
            marginLeft: 80,
          }}>
          Notifications
        </Text>
      </View>
      <ScrollView></ScrollView>
    </View>
  );
}

export default Notif;
