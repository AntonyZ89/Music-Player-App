import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import {AppStackParamList} from '~/App';

type AlbumNavigationProps = NavigationProp<AppStackParamList, 'Album'>;

const AlbumTabCard = () => {
  const navigation = useNavigation<AlbumNavigationProps>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Album')}>
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
    </TouchableOpacity>
  );
};

export default AlbumTabCard;
