import React from 'react';
import {View} from 'react-native';
import {PlayerBanner, PlayerOptions, PlayerTime} from '../../components';

const Player = () => {
  return (
    <View>
      <PlayerBanner />
      <PlayerOptions />
      <PlayerTime />
    </View>
  );
};

export default Player;
