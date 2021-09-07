import React from 'react';
import {ScrollView, View} from 'react-native';
import {TrackTabCard} from '~/components';
import styles from './styles';

const Playlist = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TrackTabCard />
        <TrackTabCard />
        <TrackTabCard />
        <TrackTabCard />
        <TrackTabCard />
        <TrackTabCard />
        <TrackTabCard />
        <TrackTabCard />
        <TrackTabCard />
        <TrackTabCard />
      </ScrollView>
    </View>
  );
};

export default Playlist;
