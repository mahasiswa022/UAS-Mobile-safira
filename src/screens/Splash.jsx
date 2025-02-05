import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MenuTab');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.bg}>
      <Image
        source={require('../assets/soda.png')}
        style={styles.logo}></Image>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 110,
    height: 200,
  },
});
