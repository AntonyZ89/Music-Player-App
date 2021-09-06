import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const AlbumCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.track}>Audio 01</Text>
        <Text style={styles.artist}>{'<unknown>'}</Text>
      </View>
      <Text style={styles.time}>0:11</Text>
      <Icon size={14} name={'ellipsis-v'} color={'white'} />
    </View>
  );
};

export default AlbumCard;
