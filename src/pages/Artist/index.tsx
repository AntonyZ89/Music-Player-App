import React from 'react';
import {ScrollView, View} from 'react-native';
import {ArtistHeader, TrackTabCard} from '~/components';

import styles from './styles';

const Artist = () => {
  return (
    <View style={styles.container}>
      <ArtistHeader />
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

export default Artist;
