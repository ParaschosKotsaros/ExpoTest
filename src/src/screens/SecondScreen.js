import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderPageTwo from '../components/HeaderPageTwo';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import TabBar from '../components/TabBar';

const SecondScreen = ({ route }) => {
  const { selectedItem } = route.params;
  const topics = selectedItem.topics;
  const [expandedTopicIndex, setExpandedTopicIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const toggleExpansion = (index) => {
    setExpandedTopicIndex(expandedTopicIndex === index ? null : index);
  };

  const handleTabPress = (tab) => {
    if (tab === activeTab) {
      // If the same tab is clicked, deactivate it
      setActiveTab(null);
      setExpandedTopicIndex(null);
    } else {
      // If a different tab is clicked, activate it
      setActiveTab(tab);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderPageTwo />
      <TabBar activeTab={activeTab} onTabPress={handleTabPress} />
      {(activeTab === 'SCHEDULE' || activeTab === 'TAB1' || activeTab === 'TAB2' || activeTab === 'TAB3') && (
        <ScrollView contentContainerStyle={styles.additionalDataContainer}>
          {topics.map((topic, index) => (
            <TouchableOpacity key={index} onPress={() => toggleExpansion(index)}>
              <View style={styles.topicCard}>
                <Text style={[styles.topicName, expandedTopicIndex === index && styles.expandedText]}>
                  <Text>Τι είναι το Lorem Ipsum;</Text>
                </Text>
                <MaterialIcons
                  name={expandedTopicIndex === index ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  size={24}
                  color='white'
                  style={styles.arrowIcon}
                />
              </View>

              {/* Render expanded content for the selected topic */}
              {expandedTopicIndex === index && (
                <View style={styles.expandedContent}>
                  {/* Map through the lessons array and render a card for each lesson */}
                  {topics[expandedTopicIndex].topic_content.lessons.map((lesson, lessonIndex) => (
                    <View key={lessonIndex} style={styles.expandedCard}>
                      <Text>{lesson.title}</Text>
                      <View style={styles.expandedCardContent}>
                        <Text style={styles.expandedProperty}>
                          <AntDesign name="clockcircleo" size={20} color="#696969" />
                          {lesson.time_starts}
                        </Text>
                        <Text style={styles.expandedProperty}>
                          <MaterialCommunityIcons name="calendar-weekend" size={20} color="#696969" />
                          {lesson.date}
                        </Text>
                        <Text style={styles.expandedProperty}>
                          <Entypo name="location-pin" size={20} color="#808080" />
                          {lesson.address}
                        </Text>
                        <Text style={styles.expandedIcon}>
                          <FontAwesome name="user-circle" size={20} color="#696969" />
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },

  additionalDataContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
  },

  topicCard: {
    flexGrow: 1,
    width: 800,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 15,
    marginBottom: 2,
    borderWidth: 1,
    borderColor: '#696969',
  },
  topicName: {
    fontSize: 16,
    color: 'white',
  },
  expandedContent: {
    marginTop: 10,
    backgroundColor: 'white',
    borderColor: '#696969',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#696969',
  },
  expandedTitle: {
    fontSize: 15,
    marginBottom: 10,
  },
  expandedCard: {
    flexDirection: 'column',
  },
  expandedCardContent: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#696969',
  },
  expandedProperty: {
    marginRight: 20,
  },
  expandedIcon: {
    marginLeft: 'auto',
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
});

export default SecondScreen;