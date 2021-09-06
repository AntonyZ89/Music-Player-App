import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const AlbumHeader = () => {
  return (
    <View style={styles.container}>
      <Icon size={100} color={'black'} name={'music'} />
    </View>
  );
};

export default AlbumHeader;
