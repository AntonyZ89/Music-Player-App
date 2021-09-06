import React from 'react';
import {View, Image} from 'react-native';
import images from '~/assets/images';
import styles from './styles';

const PlayerBanner = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={images.player.background} />
    </View>
  </View>
);
export default PlayerBanner;
