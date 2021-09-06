import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

type PROPS = {
  type: 'in' | 'out';
} & CARD;

type CARD = {
  title: string;
};

const InCard = ({title}: CARD) => (
  <View style={[styles.container, styles.inContainer]}>
    <Icon size={40} color={'white'} name={'folder'} style={styles.folder} />
    <Text style={styles.title} numberOfLines={1}>
      {title}
    </Text>
    <Icon size={14} color={'white'} name={'ellipsis-v'} style={styles.menu} />
  </View>
);

const OutCard = ({title}: CARD) => (
  <View style={styles.container}>
    <Icon
      size={40}
      color={'white'}
      name={'folder-open'}
      style={styles.folder}
      solid
    />
    <Text style={styles.title} numberOfLines={1}>
      ...{title}
    </Text>
  </View>
);

const FolderTabCard = ({type, ...props}: PROPS) => {
  return type === 'in' ? <InCard {...props} /> : <OutCard {...props} />;
};

export default FolderTabCard;
