import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

function profil({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#F6F6F6'}}>
      <StatusBar barStyle="light-content" backgroundColor="#B01116" />

      <View
        style={{
          backgroundColor: '#B01116',
          flexDirection: 'row',
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
            fontWeight: 'bold',
            fontSize: 24,
            color: 'white',
            marginLeft: 110,
          }}>
          Profile
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          marginTop: 130,
          left: 160,
          backgroundColor: 'white',
          borderRadius: 70,
          borderWidth: 1,
          borderColor: 'white',
          width: 80,
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 10,
        }}>
        <Text
          style={{
            color: 'red',
            fontFamily: 'Poppins-Medium',
            fontSize: 24,
            fontWeight: '600',
          }}>
          M
        </Text>
      </View>

      <View
        style={{
          marginTop: 140,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: '#0A0A0A',
            marginBottom: 20,
          }}>
          M.Hamzah.Marufi Pane
        </Text>

        <View
          style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: '#0A0A0A',
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                fontWeight: '500',
              }}
              onPress={function () {
                navigation.replace('Details');
              }}>
              Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          backgroundColor: '#DF2A31',
          marginTop: 30,
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 20,
          flexDirection: 'row',
          paddingVertical: 10,
        }}>
        <FontAwesome name="folder-o" size={24} color="white" />
        <Text
          style={{
            marginLeft: 50,
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: 'white',
            fontWeight: '700',
            marginRight: 155,
          }}>
          File pribadi{' '}
        </Text>
        <TouchableOpacity
          onPress={function () {
            navigation.replace('FileScreen');
          }}>
          <FontAwesome name="angle-right" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingHorizontal: 30,
          backgroundColor: '#DF2A31',
          marginTop: 30,
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 20,
          flexDirection: 'row',
          paddingVertical: 10,
        }}>
        <Ionicons name="md-help-buoy" size={24} color="white" />
        <Text
          style={{
            marginLeft: 50,
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: 'white',
            fontWeight: '700',
            marginRight: 180,
          }}>
          Bantuan
        </Text>
        <TouchableOpacity>
          <FontAwesome name="angle-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          backgroundColor: '#DF2A31',
          marginTop: 30,
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 20,
          flexDirection: 'row',
          paddingVertical: 10,
        }}>
        <Ionicons name="md-settings-outline" size={24} color="white" />
        <Text
          style={{
            marginLeft: 50,
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: 'white',
            fontWeight: '700',
            marginRight: 160,
          }}>
          Pengaturan
        </Text>
        <TouchableOpacity>
          <FontAwesome name="angle-right" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingHorizontal: 30,
          backgroundColor: '#DF2A31',
          marginTop: 30,
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 20,
          flexDirection: 'row',
          paddingVertical: 10,
        }}>
        <Ionicons name="log-out-outline" size={24} color="white" />
        <Text
          style={{
            marginLeft: 50,
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: 'white',
            fontWeight: '700',
            marginRight: 195,
          }}>
          Keluar
        </Text>
        <TouchableOpacity>
          <FontAwesome name="angle-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default profil;
