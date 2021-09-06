import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {GenreCard} from '..';

const Genres = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
      </ScrollView>
    </View>
  );
};

export default Genres;
