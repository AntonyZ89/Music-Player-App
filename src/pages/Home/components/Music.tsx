import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import stylesheet from '../styles';

const Music = () => {
  const styles = stylesheet();

  return (
    <View style={styles.musicContainer}>
      <View style={styles.musicIcon}>
        <Icon size={32} color={'black'} name={'music'} />
      </View>
      <View style={styles.info}>
        <Text style={styles.track}>Track 01</Text>
        <Text style={styles.artist}>SendAnywhere</Text>
      </View>
      <View style={styles.toggle}>
        <Icon size={32} color={styles.toggle.color} name={'play'} />
      </View>
    </View>
  );
};

export default Music;
