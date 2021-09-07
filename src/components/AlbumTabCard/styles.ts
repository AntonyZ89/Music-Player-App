import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  icon: {
    backgroundColor: '#632042',
    padding: 10,
    width: 65,
    height: 65,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
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
