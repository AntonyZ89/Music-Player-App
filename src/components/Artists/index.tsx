import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {ArtistCard} from '..';

const Artists = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </ScrollView>
    </View>
  );
};

export default Artists;
