import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TabBar = ({ activeTab, onTabPress }) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'SCHEDULE' && styles.activeTab]}
        onPress={() => onTabPress('SCHEDULE')}>
        <Text style={[styles.tabText, activeTab === 'SCHEDULE' && styles.activeTabText]}>SCHEDULE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'TAB1' && styles.activeTab]}
        onPress={() => onTabPress('TAB1')}>
        <Text style={[styles.tabText, activeTab === 'TAB1' && styles.activeTabText]}>TAB1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'TAB2' && styles.activeTab]}
        onPress={() => onTabPress('TAB2')}>
        <Text style={[styles.tabText, activeTab === 'TAB2' && styles.activeTabText]}>TAB2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'TAB3' && styles.activeTab]}
        onPress={() => onTabPress('TAB3')}>
        <Text style={[styles.tabText, activeTab === 'TAB3' && styles.activeTabText]}>TAB3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#F0f0f0',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabText: {
    fontSize: 16,
    color: '#808080',
  },
  activeTab: {
    borderBottomWidth: 10,
    borderBottomColor: '#808080',
  },
  activeTabText: {
    color: '#808080',
  },
});

export default TabBar;