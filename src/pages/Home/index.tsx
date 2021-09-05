import React, {useState} from 'react';
import {View} from 'react-native';
import {FAB} from 'react-native-paper';
import {SceneMap, TabBar, TabBarItem, TabView} from 'react-native-tab-view';
import {Album, Discover, Music, Tracks} from '~/components';
import stylesheet from './styles';

const scenes = SceneMap({
  tracks: Tracks,
  album: Album,
  discover: Discover,
  playlists: Tracks,
  folders: Tracks,
});

const Home = () => {
  const styles = stylesheet();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tracks', title: 'Tracks'},
    {key: 'album', title: 'Album'},
    {key: 'discover', title: 'Discover'},
    {key: 'playlists', title: 'Playlists'},
    {key: 'folders', title: 'Folders'},
  ]);

  return (
    <View style={styles.container}>
      <Music />
      <TabView
        navigationState={{index, routes}}
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
        onIndexChange={setIndex}
        initialLayout={{width: 300}}
      />
      <FAB icon={'shuffle'} style={styles.FAB} />
    </View>
  );
};

export default Home;
