import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const styles = () => {
  const {
    colors: {primary, headerColor},
  } = useTheme();

  return StyleSheet.create({
    musicContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: primary,
      padding: 10,
    },
    musicIcon: {
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
    trackCardContainer: {
      flexDirection: 'row',
      paddingHorizontal: 15,
      paddingVertical: 10,
      alignItems: 'center',
    },
    trackCardTime: {
      color: 'white',
      marginRight: 20
    },
    track: {
      color: headerColor,
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
    tabBarContainer: {
      backgroundColor: primary,
    },
    tabBarLabel: {
      fontWeight: 'bold',
      color: 'white',
    },
    activeBarItem: {
      backgroundColor: '#6e3c42',
      padding: 10,
    },
  });
};

export default styles;
