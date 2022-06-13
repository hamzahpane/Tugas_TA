import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Logo1 from '../../../assets/images/b2.svg';

function Landing({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <Logo1 style={styles.container} />

      <Text style={styles.container1}>Select Your Login Option: </Text>

      <View>
        <TouchableOpacity
          style={styles.container2}
          onPress={function () {
            navigation.replace('login');
          }}>
          <Text style={styles.container3}>LMS</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.container4}>
          <Text style={styles.container5}> MOC </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 67,
            height: 1,
            backgroundColor: '#7B7878',
            marginTop: 20,
            marginLeft: 100,
          }}></View>

        <Text style={styles.container6}> or login </Text>

        <View
          style={{
            width: 67,
            height: 1,
            backgroundColor: '#7B7878',
            marginTop: 20,
            marginRight: 100,
          }}></View>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#B01116',
            paddingVertical: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            marginHorizontal: 50,
            borderRadius: 30,
            elevation: 5,
          }}>
          <Text
            style={{
              color: '#FBF9FA',
              fontSize: 16,
              fontFamily: 'Poppins-Bold',
              fontWeight: 'bold',
            }}>
            {' '}
            Scan Barcode{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text
            style={{
              color: '#7B7878',
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              marginLeft: 57,
              marginTop: 10,
              textAlign: 'justify',
            }}>
            Need Help?{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Landing;
