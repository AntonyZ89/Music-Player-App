import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const PlayerOptions = () => (
  <View style={styles.container}>
    <Icon name={'random'} size={25} color={'#be4d56'} />
    <Icon name={'step-backward'} size={25} color={'white'} />
    <Icon name={'pause'} size={25} color={'white'} style={styles.toggle} />
    <Icon name={'step-forward'} size={25} color={'white'} />
    <Icon name={'redo'} size={25} color={'white'} />
  </View>
);

export default PlayerOptions;
