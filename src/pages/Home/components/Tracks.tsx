import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import TrackCard from './TrackCard';

// import { Container } from './styles';

const Tracks = () => {
  return (
    <View style={{flex: 1}}>
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
    </View>
  );
};

export default Tracks;
