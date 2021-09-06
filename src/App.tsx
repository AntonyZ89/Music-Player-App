import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import React from 'react';
import {Home, Player} from './pages';
import {Platform, StatusBar, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export type AppStackParamList = {
  Home: undefined;
  Player: undefined;
};

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,

    primary: '#262c32',
    headerColor: 'white',
    background: '#641721',
  },
};

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

const Stack = createStackNavigator<AppStackParamList>();

const App = () => {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={CombinedDefaultTheme.colors.primary}
      />
      <NavigationContainer theme={CombinedDefaultTheme}>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerStyle: {
              backgroundColor: CombinedDefaultTheme.colors.primary,
            },
            headerTintColor: CombinedDefaultTheme.colors.headerColor,
            headerLeftContainerStyle: {
              paddingLeft: 20,
              paddingRight: 5,
            },
          }}>
          <Stack.Screen
            options={{
              title: 'My Music',
              headerLeft: () => (
                <Icon
                  name={'bars'}
                  color={CombinedDefaultTheme.colors.headerColor}
                  size={25}
                />
              ),
            }}
            name={'Home'}
            component={Home}
          />
          <Stack.Screen
            options={{
              title: '',
              ...(Platform.OS === 'ios'
                ? {
                    headerTransparent: true,
                  }
                : {
                    headerStyle: {
                      backgroundColor: 'transparent',
                      elevation: 0,
                    },
                  }),
              headerRight: ({tintColor}) => (
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name={'music'}
                    color={tintColor}
                    size={15}
                    style={{marginRight: 25}}
                  />
                  <Icon
                    name={'signal'}
                    color={tintColor}
                    size={15}
                    style={{marginRight: 25}}
                  />
                  <Icon
                    name={'ellipsis-v'}
                    color={tintColor}
                    size={15}
                    style={{marginRight: 15}}
                  />
                </View>
              ),
            }}
            name={'Player'}
            component={Player}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
