import React from 'react-native';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Details({navigation}) {
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
              navigation.replace('Profil');
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
          Details
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          marginTop: 120,
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
          marginTop: 130,
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
                fontWeight: '700',
              }}
              onPress={function () {
                navigation.replace('Details');
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              color: '#0A0A0A',
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              fontWeight: '700',
            }}>
            Mahasiswa
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity>
            <FontAwesome5
              name="pen-nib"
              size={24}
              color="#EA6262"
              style={{marginRight: 50}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="codesandbox" size={24} color="#EA6262" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 350,
            height: 1,
            backgroundColor: '#C4C4C4',
            marginTop: 30,
          }}></View>
        <View style={{margin: 10}}>
          <Text
            style={{
              marginRight: 310,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              fontWeight: '500',
              color: '#000000',
            }}>
            Email
          </Text>
        </View>
        <View
          style={{
            width: 350,
            height: 1,
            backgroundColor: '#C4C4C4',
            marginTop: 20,
          }}></View>
        <View style={{margin: 10}}>
          <Text
            style={{
              marginRight: 290,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              fontWeight: '500',
              color: '#000000',
            }}>
            Fakultas
          </Text>
        </View>

        <View
          style={{
            width: 350,
            height: 1,
            backgroundColor: '#C4C4C4',
            marginTop: 20,
          }}></View>
        <View style={{margin: 10}}>
          <Text
            style={{
              marginRight: 310,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              fontWeight: '500',
              color: '#000000',
            }}>
            Prodi
          </Text>
        </View>
      </View>
    </View>
  );
}
export default Details;
