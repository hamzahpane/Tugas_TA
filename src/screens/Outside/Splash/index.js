import React, {useEffect} from 'react';
import {View, Text, StatusBar, Image, ActivityIndicator} from 'react-native';
import styles from './style';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('landing');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View>
        <Image
          source={require('../../../assets/images/ic-logo_celoe.jpg')}
          style={styles.container}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.container1}> Powered by</Text>
      </View>
      <View>
        <Image
          source={require('../../../assets/images/logo1.jpg')}
          style={styles.container2}
        />
      </View>
    </View>
  );
}

export default SplashScreen;
