import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';

const DiscoverBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Billboard</Text>
      <Text style={styles.subtitle}>MOST POPULAR SONGS</Text>
    </View>
  );
};

export default DiscoverBanner;
