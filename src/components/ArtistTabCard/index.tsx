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

const ArtistTabCard = () => {
  const navigation = useNavigation<AppStackNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Player')}>
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.title}>{'<unknown>'}</Text>
          <Text style={styles.albums}>15 Albums</Text>
        </View>
        <Text style={styles.tracks}>208 Track(s)</Text>
        <Icon size={14} color={'white'} name={'ellipsis-v'} />
      </View>
    </TouchableOpacity>
  );
};

export default ArtistTabCard;
