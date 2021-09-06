import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AppStackParamList} from '~/App';
import styles from './styles';

type AppStackNavigationProp = StackNavigationProp<AppStackParamList>;
type PROPS = {
  name: string;
};

const PlaylistTabCard = ({name}: PROPS) => {
  const navigation = useNavigation<AppStackNavigationProp>();

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Icon size={14} color={'white'} name={'ellipsis-v'} />
      </View>
    </TouchableOpacity>
  );
};

export default PlaylistTabCard;
