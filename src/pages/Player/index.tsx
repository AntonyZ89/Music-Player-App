import React from 'react';
import {View} from 'react-native';
import {
  PlayerBackground,
  PlayerBanner,
  PlayerInfo,
  PlayerOptions,
  PlayerTime,
} from '~/components';
import styles from './styles';

const Player = () => {
  return (
    <View style={styles.container}>
      <PlayerBackground />
      <PlayerBanner />
      <PlayerOptions />
      <PlayerTime />
      <PlayerInfo />
    </View>
  );
};

export default Player;
