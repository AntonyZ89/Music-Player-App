import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';

const DiscoverTabBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Billboard</Text>
      <Text style={styles.subtitle}>MOST POPULAR SONGS</Text>
    </View>
  );
};

export default DiscoverTabBanner;
