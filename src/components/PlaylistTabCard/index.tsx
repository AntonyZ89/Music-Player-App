import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AppStackParamList} from '~/App';
import styles from './styles';

type PlaylistNavigationProp = NavigationProp<AppStackParamList, 'Playlist'>;

type PROPS = {
  name: string;
};

const PlaylistTabCard = ({name}: PROPS) => {
  const navigation = useNavigation<PlaylistNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Playlist')}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Icon size={14} color={'white'} name={'ellipsis-v'} />
      </View>
    </TouchableOpacity>
  );
};

export default PlaylistTabCard;
