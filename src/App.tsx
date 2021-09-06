import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import React from 'react';
import {Home, Player} from './pages';
import {StatusBar, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Album from './pages/Album';

export type AppStackParamList = {
  Home: undefined;
  Player: undefined;
  Album: undefined;
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

const Stack = createNativeStackNavigator<AppStackParamList>();

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
          }}>
          <Stack.Screen
            options={{
              title: 'My Music',
              headerLeft: () => (
                <Icon
                  name={'bars'}
                  color={CombinedDefaultTheme.colors.headerColor}
                  size={25}
                  style={{marginRight: 16}}
                />
              ),
            }}
            name={'Home'}
            component={Home}
          />
          <Stack.Screen
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTransparent: true,
              headerShadowVisible: false,
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
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTransparent: true,
            }}
            name={'Album'}
            component={Album}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
