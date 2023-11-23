/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-bitwise */
import React, {useState} from 'react';
import {LogBox} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from './Pages/Login';
import {ThemeProvider, createTheme} from '@rneui/themed';
import MainStackScreens from './Navigators/tabNavigators';
import SearchPage from './Pages/search';
import Products from './Pages/products';
import Header2 from './components/header2';
import Product from './Pages/product';

const Stack = createStackNavigator();

const theme = createTheme({
  lightColors: {
    primary: '#caf0f8',
    secondary: '#03045e',
    white: '#fff',
    black: '#000',
  },
  darkColors: {
    primary: '#caf0f8',
    secondary: '#03045e',
    white: '#000',
    black: '#fff',
  },
  mode: 'light' | 'dark',
});

const App = () => {
  LogBox.ignoreAllLogs();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          {isLoggedIn ? (
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                options={{headerShown: false}}
                component={Login}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="Main"
                options={{headerShown: false}}
                component={MainStackScreens}
              />
              <Stack.Screen
                name="Search"
                component={SearchPage}
                options={{header: props => <Header2 {...props} />}}
              />
              <Stack.Screen
                name="Products"
                component={Products}
                options={{header: props => <Header2 {...props} />}}
              />
              <Stack.Screen
                name="Product"
                component={Product}
                options={{header: props => <Header2 {...props} />}}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
