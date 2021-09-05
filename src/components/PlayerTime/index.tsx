import React from 'react';

import {View} from 'react-native';
import styles from './styles';
import {Text} from 'react-native-paper';

const PlayerTime = () => (
  <View style={styles.container}>
    <Text style={styles.time}>0:59</Text>
    <View style={styles.line} />
    <Text style={styles.time}>1:54</Text>
  </View>
);

export default PlayerTime;
