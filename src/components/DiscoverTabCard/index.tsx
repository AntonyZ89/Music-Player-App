import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

type PROPS = {
  title: string;
  icon: string;
  source: any;
};

const DiscoverTabCard = ({title, icon, source}: PROPS) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={source}
        style={styles.background}
        resizeMode={'cover'}
        borderRadius={5}>
        <View style={styles.innerContainer}>
          <Icon name={icon} color={'white'} size={30} solid />
        </View>
      </ImageBackground>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default DiscoverTabCard;
