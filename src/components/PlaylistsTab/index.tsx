import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {PlaylistTabCard} from '..';

const Playlists = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <PlaylistTabCard name={'Recently Added'} />
        <PlaylistTabCard name={'Most Played'} />
        <PlaylistTabCard name={'Recently Played'} />
        <PlaylistTabCard name={'Recommended'} />
        <PlaylistTabCard name={'My Playlist'} />
      </ScrollView>
    </View>
  );
};

export default Playlists;
