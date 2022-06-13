import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {login, loginMoodle} from '../../../Api/moodle/auth/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIconss from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Home from '../../Home';
import {
  setUserID,
  setUserToken,
  setUsername as setUsernameRedux,
} from '../../../redux/actions/user';
import {useDispatch} from 'react-redux';

function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassowrd] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await loginMoodle(username, password);
      console.log(response);
      if (response) {
        // await AsyncStorage.setItem('token', response);
        dispatch(setUsernameRedux(username));
        dispatch(setUserToken(response.token));
        dispatch(setUserID(response.user));
        navigation.replace('Home');
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="white-content" backgroundColor="#B01116" />

      <Modal animationType="fade" transparent={true} visible={error}>
        <View>
          <Text>eror bro</Text>
        </View>
      </Modal>

      <View
        style={{
          height: Dimensions.get('window').height / 2.5,
          backgroundColor: '#B01116',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/image1.png')}
            style={{
              backgroundColor: '#B01116',
              marginTop: 80,
            }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1.5,
          backgroundColor: 'white',
          bottom: 50,
          borderTopStartRadius: 60,
          borderTopEndRadius: 60,
        }}>
        <View style={{padding: 40}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
            }}>
            Selamat datang
          </Text>
          <Text>
            Dont have acount ?<Text> daftar sekarang </Text>
          </Text>
          <View
            style={{
              marginTop: 40,
              flexDirection: 'row',
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}>
            <MaterialCommunityIconss
              name="account"
              size={24}
              color="#666"
              style={{marginRight: 10}}
            />
            <TextInput
              onChangeText={username => setUsername(username)}
              placeholder="Email ID"
              style={{
                backgroundColor: 'white',
                flex: 1,
                paddingVertical: 1,
                elevation: 3,
              }}
              keyboardType="email-address"
              autoFocus={true}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}>
            <Octicons
              name="lock"
              color="#666"
              size={24}
              style={{marginRight: 10}}
            />
            <TextInput
              onChangeText={password => setPassowrd(password)}
              placeholder="Password"
              style={{
                backgroundColor: 'white',
                flex: 1,
                paddingVertical: 0,
                elevation: 3,
              }}
              secureTextEntry={true}
              autoFocus={true}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#B01116',
              padding: 20,
              borderRadius: 10,
              marginBottom: 20,
            }}
            onPress={handleLogin}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 16,
                color: '#fff',
              }}>
              {' '}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Login;
