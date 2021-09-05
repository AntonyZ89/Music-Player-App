import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import stylesheet from '../styles';

const TrackCard = () => {
  const styles = stylesheet();

  return (
    <View style={styles.trackCardContainer}>
      <View style={styles.info}>
        <Text style={styles.track}>Track 01</Text>
        <Text style={styles.artist}>{'<unknown>'}</Text>
      </View>
      <Text style={styles.trackCardTime}>0:11</Text>
      <Icon size={14} color={'white'} name={'ellipsis-v'} />
    </View>
  );
};

export default TrackCard;
