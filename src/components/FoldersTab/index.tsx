import React from 'react';
import {ScrollView, View} from 'react-native';
import {FolderCard} from '..';

import styles from './styles';

const Folders = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FolderCard type={'out'} title={'My Musics'} />
        <FolderCard type={'in'} title={'Artist 01'} />
        <FolderCard type={'in'} title={'Artist 02'} />
        <FolderCard type={'in'} title={'Artist 03'} />
        <FolderCard type={'in'} title={'Artist 04'} />
        <FolderCard type={'in'} title={'Artist 05'} />
        <FolderCard type={'in'} title={'Artist 06'} />
        <FolderCard type={'in'} title={'Artist 07'} />
        <FolderCard type={'in'} title={'Artist 08'} />
        <FolderCard type={'in'} title={'Artist 09'} />
      </ScrollView>
    </View>
  );
};

export default Folders;
