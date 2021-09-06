import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AlbumTabCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon size={32} color={'black'} name={'music'} />
      </View>
      <View style={styles.info}>
        <Text style={styles.track}>Album</Text>
        <Text style={styles.artist}>{'<unknown>'}</Text>
      </View>
      <Icon size={14} color={'white'} name={'ellipsis-v'} />
    </View>
  );
};

export default AlbumTabCard;
