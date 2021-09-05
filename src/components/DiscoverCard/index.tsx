import React from 'react';
import {View} from 'react-native';
import {Banner, Text} from 'react-native-paper';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

type PROPS = {
  title: string;
  icon: string;
  source: any; // FIXME
};

const DiscoverCard = ({title, icon, source}: PROPS) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.background}/>
        <View style={styles.innerContainer}>
          <Icon name={icon} color={'white'} size={30} solid />
        </View>
        <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default DiscoverCard;
