import React from 'react';
import {ScrollView, View} from 'react-native';
import {FolderTabCard} from '..';

import styles from './styles';

const FoldersTab = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FolderTabCard type={'out'} title={'My Musics'} />
        <FolderTabCard type={'in'} title={'Artist 01'} />
        <FolderTabCard type={'in'} title={'Artist 02'} />
        <FolderTabCard type={'in'} title={'Artist 03'} />
        <FolderTabCard type={'in'} title={'Artist 04'} />
        <FolderTabCard type={'in'} title={'Artist 05'} />
        <FolderTabCard type={'in'} title={'Artist 06'} />
        <FolderTabCard type={'in'} title={'Artist 07'} />
        <FolderTabCard type={'in'} title={'Artist 08'} />
        <FolderTabCard type={'in'} title={'Artist 09'} />
      </ScrollView>
    </View>
  );
};

export default FoldersTab;
