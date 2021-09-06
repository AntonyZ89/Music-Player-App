import React from 'react';
import {ScrollView, View} from 'react-native';
import {AlbumCard} from '..';
import styles from './styles';

const Album = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </ScrollView>
    </View>
  );
};

export default Album;
