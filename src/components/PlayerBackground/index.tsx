import React from 'react';
import {Image} from 'react-native';
import images from '~/assets/images';
import styles from './styles';

const PlayerBackground = () => (
  <Image
    source={images.player.main}
    style={styles.container}
    blurRadius={50}
    resizeMode={'cover'}
  />
);

export default PlayerBackground;
