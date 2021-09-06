import React from 'react';
import {ImageBackground} from 'react-native';
import {
  PlayerBanner,
  PlayerInfo,
  PlayerOptions,
  PlayerTime,
  PlayerActions,
} from '~/components';
import images from '~/assets/images';
import styles from './styles';

const Player = () => {
  return (
    <ImageBackground
      source={images.player.background}
      style={styles.container}
      resizeMode={'cover'}
      blurRadius={40}>
      <PlayerBanner />
      <PlayerActions />
      <PlayerOptions />
      <PlayerTime />
      <PlayerInfo />
    </ImageBackground>
  );
};

export default Player;
