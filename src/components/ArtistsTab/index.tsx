import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {ArtistTabCard} from '..';

const ArtistsTab = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
        <ArtistTabCard />
      </ScrollView>
    </View>
  );
};

export default ArtistsTab;
