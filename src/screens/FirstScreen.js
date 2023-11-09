import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Make sure to import useNavigation
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import FooterComponent from '../components/FooterComponent';
import HeaderPageOne from '../components/HeaderPageOne';

const FirstScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();  // Use the useNavigation hook

  useEffect(() => {
    // Fetch data from the API
    fetch('http://testlc.lncdoo.com/api/myprofile/events')
      .then(response => response.json())
      .then(data => {
        // Check if 'data' property exists in the API response
        if (data && Array.isArray(data.data)) {
          setData(data.data);
        } else {
          console.error('Invalid API response structure:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data || data.length === 0) {
    return <div>Loading...</div>; // or render a loading indicator
  }

  const filteredData = data.filter(object => object.is_inclass === true);
  console.log(filteredData);

  const handleCardClick = (selectedItem) => {
    // Navigate to SecondScreen and pass the selected item's data as a parameter
    navigation.navigate('SecondScreen', { selectedItem });
  };

  return (
    <View style={styles.container}>
      <HeaderPageOne />

      <ScrollView contentContainerStyle={styles.cardContainer}>
        {filteredData.map((card, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handleCardClick(card)}>
            <Text style={{ marginLeft: 7 }}>{card.event.title}</Text>

            <Entypo name="swap" size={24} color="#696969" style={styles.swapIcon} />

            <View style={styles.bottomContainer}>
              <Entypo name="location-pin" size={22} color="#778899" />
              <Text style={{ marginRight: 15 }}>{card.event.event_info1.course_inclass_city}</Text>
              <MaterialCommunityIcons name="calendar-weekend-outline" size={20} color="#696969" />
              <Text style={{ marginRight: 15 }}>{card.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FooterComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignContent: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#808080',
    marginBottom: 30,
  },

  cardContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 20,
    width: "80%",
    borderRadius: 10,
    borderLeftWidth: 15,
    borderLeftColor: '#778899',
  },

  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  swapIcon: {
    transform: 'rotate(90deg)',
    alignSelf: 'flex-end',
    marginTop: 15,
  },
});

export default FirstScreen;