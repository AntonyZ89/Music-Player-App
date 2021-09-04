import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles';

const Music = () => {
  const s = styles();

  return (
    <View style={s.musicContainer}>
      <View style={s.musicIcon}>
        <Icon size={32} color={'black'} name={'music'} />
      </View>
      <View style={s.info}>
        <Text style={s.track}>Track 01</Text>
        <Text style={s.artist}>SendAnywhere</Text>
      </View>
      <View style={s.toggle}>
        <Icon size={32} color={s.toggle.color} name={'play'} />
      </View>
    </View>
  );
};

export default Music;
