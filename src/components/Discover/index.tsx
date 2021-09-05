import React from 'react';
import {ScrollView, View} from 'react-native';
import DiscoverCard from '../DiscoverCard';
import DiscoverBanner from '../DiscoverBanner';
import styles from './styles';
import {Text} from 'react-native-paper';
import images from '../../assets/images';

const Discover = () => {
  return (
    <View style={{flex: 1}}>
      <DiscoverBanner />
      <View style={styles.moodsContainer}>
        <Text style={styles.moods}>Moods</Text>
        <ScrollView>
          <View style={styles.row}>
            <DiscoverCard
              title={'Focus'}
              icon={'leaf'}
              source={images.moods.focus}
            />
            <DiscoverCard
              title={'Party'}
              icon={'glass-cheers'}
              source={images.moods.party}
            />
          </View>
          <View style={styles.row}>
            <DiscoverCard
              title={'Sleep'}
              icon={'moon'}
              source={images.moods.sleep}
            />
            <DiscoverCard
              title={'Travel'}
              icon={'car'}
              source={images.moods.travel}
            />
          </View>
          <View style={styles.row}>
            <DiscoverCard
              title={'Workout'}
              icon={'users'}
              source={images.moods.workout}
            />
            <DiscoverCard
              title={'Romance'}
              icon={'heart'}
              source={images.moods.romance}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Discover;
