import React from 'react';
import {ScrollView, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {AlbumHeader, TrackTabCard} from '~/components';
import styles from './styles';

const Album = () => {
  return (
    <View style={styles.container}>
      <AlbumHeader />
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
      <FAB icon={'shuffle'} style={styles.FAB} />
    </View>
  );
};

export default Album;
