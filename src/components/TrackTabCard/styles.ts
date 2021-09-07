import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  time: {
    color: 'white',
    marginRight: 20,
  },
  info: {
    flex: 0.95,
  },
  track: {
    color: 'white',
    fontSize: 20,
  },
  artist: {
    color: 'white',
    fontSize: 12,
  },
});
