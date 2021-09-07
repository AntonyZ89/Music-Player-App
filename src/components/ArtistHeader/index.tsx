import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const Item = () => (
  <View style={styles.itemContainer}>
    <View style={styles.itemIcon}>
      <Icon name={'music'} size={32} />
    </View>
    <Text style={styles.itemTitle}>Others</Text>
  </View>
);

const ArtistHeader = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ScrollView>
    </View>
  );
};

export default ArtistHeader;
