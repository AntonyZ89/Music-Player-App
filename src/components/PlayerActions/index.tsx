import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const PlayerActions = () => {
  return (
    <View style={styles.container}>
      <Icon name={'camera'} size={20} color={'white'} />
      <Icon name={'heart'} light size={20} color={'white'} />
      <Icon name={'volume-up'} size={20} color={'white'} />
    </View>
  );
};

export default PlayerActions;
