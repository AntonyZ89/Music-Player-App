import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const TrackCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.track}>Track 01</Text>
        <Text style={styles.artist}>{'<unknown>'}</Text>
      </View>
      <Text style={styles.time}>0:11</Text>
      <Icon size={14} color={'white'} name={'ellipsis-v'} />
    </View>
  );
};

export default TrackCard;
