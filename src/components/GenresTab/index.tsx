import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {GenreTabCard} from '..';

const GenresTab = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <GenreTabCard />
        <GenreTabCard />
        <GenreTabCard />
        <GenreTabCard />
        <GenreTabCard />
        <GenreTabCard />
        <GenreTabCard />
        <GenreTabCard />
        <GenreTabCard />
        <GenreTabCard />
      </ScrollView>
    </View>
  );
};

export default GenresTab;
