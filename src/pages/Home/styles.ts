import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const styles = () => {
  const {
    colors: {primary},
  } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
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
      borderRadius: 15,
      overflow: 'hidden',
    },
    FAB: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      backgroundColor: '#be4d56',
    },
  });
};

export default styles;
