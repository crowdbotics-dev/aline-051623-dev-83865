import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return <View style={styles.container}>
      <ImageBackground source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077be',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});
export default SplashScreen;