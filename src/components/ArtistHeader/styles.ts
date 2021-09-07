import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  info: {
    flex: 0.9,
  },
  track: {
    color: 'white',
    fontSize: 20,
  },
  artist: {
    color: 'white',
    fontSize: 12,
  },
  itemContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  itemIcon: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A1A58',
  },
  itemTitle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: 'white',
  },
});
