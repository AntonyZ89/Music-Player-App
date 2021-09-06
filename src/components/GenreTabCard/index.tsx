import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const GenreTabCard = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Alternativo</Text>
    <Icon size={14} color={'white'} name={'ellipsis-v'} />
  </View>
);

export default GenreTabCard;
