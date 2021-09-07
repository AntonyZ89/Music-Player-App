import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 0.8,
  },
  imageContainer: {
    flex: 0.95,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: window.width - 40,
    height: window.width - 40,
    borderRadius: 5,
  },
});
