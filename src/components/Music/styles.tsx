import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

export default () => {
  const {
    colors: {primary, headerColor},
  } = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: primary,
      padding: 10,
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
      color: headerColor,
      fontSize: 12,
    },
    toggle: {
      justifyContent: 'center',
      alignItems: 'center',
      color: headerColor,
    },
  });
};
