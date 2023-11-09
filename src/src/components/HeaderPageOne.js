import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const HeaderPageOne = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../logo.png')} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#808080',
    marginBottom: 30,
  },
  logo: {
    width: 130, // Adjust the width based on your design
    height: 130,
    marginLeft: 50,
  },
});

export default HeaderPageOne;