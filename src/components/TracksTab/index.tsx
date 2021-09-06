import React from 'react';
import {ScrollView, View} from 'react-native';
import TrackTabCard from '../TrackTabCard';
import styles from './styles';

const Tracks = () => {
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

export default Tracks;
