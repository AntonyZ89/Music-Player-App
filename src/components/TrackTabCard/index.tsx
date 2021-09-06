import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AppStackParamList} from '~/App';
import styles from './styles';

type PlayerNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Player'
>;

const TrackTabCard = () => {
  const navigation = useNavigation<PlayerNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Player')}>
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.track}>Track 01</Text>
          <Text style={styles.artist}>{'<unknown>'}</Text>
        </View>
        <Text style={styles.time}>0:11</Text>
        <Icon size={14} color={'white'} name={'ellipsis-v'} />
      </View>
    </TouchableOpacity>
  );
};

export default TrackTabCard;
