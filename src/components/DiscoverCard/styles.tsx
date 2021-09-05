import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0.5,
    margin: 5,
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    width: '200%',
    maxHeight: 85,
  },
  innerContainer: {
    height: 85,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
});
