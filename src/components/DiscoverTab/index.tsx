import React from 'react';
import {ScrollView, View} from 'react-native';
import {DiscoverTabBanner, DiscoverTabCard} from '..';
import {Text} from 'react-native-paper';
import styles from './styles';
import images from '~/assets/images';

const DiscoverTab = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <DiscoverTabBanner />
        <View style={styles.moodsContainer}>
          <Text style={styles.moods}>Moods</Text>
          <View style={styles.row}>
            <DiscoverTabCard
              title={'Focus'}
              icon={'leaf'}
              source={images.moods.focus}
            />
            <DiscoverTabCard
              title={'Party'}
              icon={'glass-cheers'}
              source={images.moods.party}
            />
          </View>
          <View style={styles.row}>
            <DiscoverTabCard
              title={'Sleep'}
              icon={'moon'}
              source={images.moods.sleep}
            />
            <DiscoverTabCard
              title={'Travel'}
              icon={'car'}
              source={images.moods.travel}
            />
          </View>
          <View style={styles.row}>
            <DiscoverTabCard
              title={'Workout'}
              icon={'users'}
              source={images.moods.workout}
            />
            <DiscoverTabCard
              title={'Romance'}
              icon={'heart'}
              source={images.moods.romance}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DiscoverTab;
