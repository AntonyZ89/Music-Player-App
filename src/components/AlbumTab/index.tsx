import React from 'react';
import {ScrollView, View} from 'react-native';
import {AlbumTabCard} from '..';
import styles from './styles';

const AlbumTab = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <AlbumTabCard />
        <AlbumTabCard />
        <AlbumTabCard />
        <AlbumTabCard />
        <AlbumTabCard />
        <AlbumTabCard />
        <AlbumTabCard />
        <AlbumTabCard />
        <AlbumTabCard />
      </ScrollView>
    </View>
  );
};

export default AlbumTab;
