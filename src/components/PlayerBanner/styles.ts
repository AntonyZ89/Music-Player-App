import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 0.8,
  },
  imageContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  image: {
    width: window.width - 25,
    height: window.width - 25,
    borderRadius: 5,
  },
});
