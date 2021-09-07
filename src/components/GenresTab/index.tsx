import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {GenreTabCard} from '..';

const GenresTab = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <GenreTabCard name={'Alternative'} />
        <GenreTabCard name={'Blues'} />
        <GenreTabCard name={'Country'} />
        <GenreTabCard name={'Funk'} />
        <GenreTabCard name={'Hip Hop'} />
        <GenreTabCard name={'Jazz'} />
        <GenreTabCard name={'Pop'} />
        <GenreTabCard name={'Rock'} />
        <GenreTabCard name={'Rap'} />
        <GenreTabCard name={'Reggae'} />
      </ScrollView>
    </View>
  );
};

export default GenresTab;
