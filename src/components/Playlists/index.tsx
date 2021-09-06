import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {PlaylistCard} from '..';

const Playlists = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <PlaylistCard name={'Recently Added'}/>
        <PlaylistCard name={'Most Played'}/>
        <PlaylistCard name={'Recently Played'}/>
        <PlaylistCard name={'Recommended'}/>
        <PlaylistCard name={'My Playlist'}/>
      </ScrollView>
    </View>
  );
};

export default Playlists;
