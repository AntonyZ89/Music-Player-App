import React, {useState} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {SceneMap, TabBar, TabBarItem, TabView} from 'react-native-tab-view';
import {
  Album,
  Artists,
  Discover,
  Genres,
  Music,
  Playlists,
  Tracks,
} from '~/components';
import stylesheet from './styles';

const scenes = SceneMap({
  tracks: Tracks,
  album: Album,
  discover: Discover,
  artists: Artists,
  genres: Genres,
  playlists: Playlists,
  folders: Tracks,
});

const routes = [
  {key: 'tracks', title: 'Tracks'},
  {key: 'album', title: 'Album'},
  {key: 'discover', title: 'Discover'},
  {key: 'artists', title: 'Artists'},
  {key: 'genres', title: 'Genres'},
  {key: 'playlists', title: 'Playlists'},
  {key: 'folders', title: 'Folders'},
];

const FABIcons: {[key: string]: string} = {
  tracks: 'shuffle',
  album: 'shuffle',
  artists: 'shuffle',
  genders: 'shuffle',
  playlists: 'plus',
};

const Home = () => {
  const styles = stylesheet();
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [FABIcon, setFABIcon] = useState<string>('shuffle');

  return (
    <View style={styles.container}>
      <Music />
      <TabView
        navigationState={{index, routes}}
        onSwipeStart={() => console.log({index})}
        renderTabBar={props => (
          <TabBar
            {...props}
            scrollEnabled
            renderTabBarItem={({key, ...item_props}) => (
              <TabBarItem
                {...{key, ...item_props}}
                style={styles.tabBarContainer}
                labelStyle={[
                  styles.tabBarLabel,
                  routes[index].key === key ? styles.activeBarItem : null,
                ]}
              />
            )}
          />
        )}
        renderScene={scenes}
        onIndexChange={i => {
          setIndex(i);
          setFABIcon(FABIcons[routes[i].key]);
        }}
        initialLayout={{width: layout.width}}
      />
      {FABIcon && <FAB icon={FABIcon} style={styles.FAB} />}
    </View>
  );
};

export default Home;
