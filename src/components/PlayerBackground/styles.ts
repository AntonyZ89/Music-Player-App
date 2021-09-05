import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: -56,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});
