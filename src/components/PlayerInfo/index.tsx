import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const PlayerInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.track}>Beauty Lies In The Heart</Text>
      <Text style={styles.artist}>H J</Text>
    </View>
  );
};

export default PlayerInfo;
