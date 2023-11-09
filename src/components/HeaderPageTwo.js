import React, { useState } from 'react';
import { View, Pressable, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Import the necessary icon library

const HeaderPageTwo = () => {
  const navigation = useNavigation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleBackPress = () => {
    navigation.navigate('FirstScreen'); // Navigate to the FirstPage
  };

  const handleSearchPress = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle search input visibility
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleBackPress}>
        <MaterialIcons name="arrow-back" size={40} color="white" />
      </Pressable>
      {isSearchVisible ? (
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          autoFocus={true}
          onBlur={() => setIsSearchVisible(false)}
        />
      ) : (
        <Pressable onPress={handleSearchPress}>
          <MaterialIcons name="search" size={40} color="white" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:150,
    flexDirection: 'row',
    backgroundColor: '#808080',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  searchInput: {
    flex:2,
    marginRight: 30,
    color: 'white',
  },
});

export default HeaderPageTwo;