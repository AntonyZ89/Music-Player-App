import React from 'react';
import {View} from 'react-native';
import {Tabs, TabScreen} from 'react-native-paper-tabs';
import {Music, Tracks} from './components';

const screens = {
  Tracks: <Tracks />,
  Playlists: <View style={{backgroundColor: 'black', flex: 1}} />,
  Discover: <View style={{backgroundColor: 'black', flex: 1}} />,
  Folders: <View style={{backgroundColor: 'black', flex: 1}} />,
  Album: <View style={{backgroundColor: 'black', flex: 1}} />,
};

const Home = () => {
  return (
    <View>
      <Music />
      <Tabs
        // defaultIndex={0} // default = 0
        // uppercase={false} // true/false | default=true | labels are uppercase
        // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
        // iconPosition // leading, top | default=leading
        // style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
        // dark={false} // works the same as AppBar in react-native-paper
        // theme={} // works the same as AppBar in react-native-paper
        mode="scrollable" // fixed, scrollable | default=fixed
        // onChangeIndex={(newIndex) => {}} // react on index change
        // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
      >
        {Object.entries(screens).map(([key, value]) => (
          <TabScreen label={key}>{value}</TabScreen>
        ))}
      </Tabs>
    </View>
  );
};

export default Home;
