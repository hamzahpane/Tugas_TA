import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from './style';
class Obrolan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.container8}>
          <View style={style.container1}>
            <TouchableOpacity
              style={style.container2}
              onPress={function () {
                navigation.replace('Profil');
              }}>
              <Text style={style.container3}>M</Text>
            </TouchableOpacity>

            <Text style={style.container4}>Obrolan</Text>
            <TouchableOpacity style={{marginTop: 30, marginLeft: 60}}>
              <Ionicons name="person-add" size={24} color="white" />
            </TouchableOpacity>

            <View style={style.continue5}>
              <Ionicons name="ellipsis-vertical" size={24} color="white" />
            </View>
          </View>
          <View style={style.container6}>
            <View style={{marginRight: 20}}>
              <TouchableOpacity>
                <Feather name="search" size={18} color="#6E6E6E" />
              </TouchableOpacity>
            </View>
            <Text style={style.container7}>Cari</Text>

            <TouchableOpacity style={{marginLeft: 230}}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={18}
                color="#6E6E6E"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.container1}>
          <View style={style.container9}>
            <Text style={style.container3}>M</Text>
          </View>
          <Text
            style={{
              marginTop: 40,
              marginLeft: 40,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#484848',
            }}>
            M.Hamza.Marufi Pane
          </Text>
          <TouchableOpacity style={{marginTop: 40, marginLeft: 65}}>
            <Ionicons name="md-logo-snapchat" size={24} color="#EA6262" />
          </TouchableOpacity>
        </View>

        <View style={style.container1}>
          <View
            style={{
              marginLeft: 25,
              marginTop: 30,
              paddingHorizontal: 20,
              backgroundColor: 'white',
            }}>
            <Ionicons name="people-outline" size={24} color="#484848" />
          </View>
          <Text
            style={{
              marginTop: 30,
              marginLeft: 30,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#484848',
            }}>
            Grup
          </Text>
          <TouchableOpacity style={{marginTop: 30, marginLeft: 190}}>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="#6E6E6E"
            />
          </TouchableOpacity>
        </View>

        <View style={style.container1}>
          <View
            style={{
              marginLeft: 25,
              marginTop: 30,
              paddingHorizontal: 20,
              backgroundColor: 'white',
            }}>
            <Ionicons name="person-outline" size={24} color="#484848" />
          </View>
          <Text
            style={{
              marginTop: 30,
              marginLeft: 30,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#484848',
            }}>
            Private
          </Text>
          <TouchableOpacity style={{marginTop: 30, marginLeft: 175}}>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="#6E6E6E"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Obrolan;
