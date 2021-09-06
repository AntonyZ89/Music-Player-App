import React from 'react';
import {ScrollView, View} from 'react-native';
import TrackCard from '../TrackCard';
import styles from './styles';

const Tracks = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TrackCard />
        <TrackCard />
        <TrackCard />
        <TrackCard />
        <TrackCard />
        <TrackCard />
        <TrackCard />
        <TrackCard />
        <TrackCard />
        <TrackCard />
      </ScrollView>
    </View>
  );
};

export default Tracks;
