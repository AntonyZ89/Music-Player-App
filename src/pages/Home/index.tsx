import React, {useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {SceneMap, TabBar, TabBarItem, TabView} from 'react-native-tab-view';
import {Music, Tracks} from './components';
import stylesheet from './styles';

const scenes = SceneMap({
  tracks: Tracks,
  playlists: Tracks,
  discover: Tracks,
  folders: Tracks,
  album: Tracks,
});

const Home = () => {
  const styles = stylesheet();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tracks', title: 'Tracks'},
    {key: 'playlists', title: 'Playlists'},
    {key: 'discover', title: 'Discover'},
    {key: 'folders', title: 'Folders'},
    {key: 'album', title: 'Album'},
  ]);

  return (
    <View style={{flex: 1}}>
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
    </View>
  );
};

export default Home;
