/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../Pages/Home';
import SearchPage from '../Pages/search';
import Header from '../components/header';
import Products from '../Pages/products';

const HomeStack = createStackNavigator();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerStyle: {
          backgroundColor: '#caf0f8',
          height: 60,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => (
            <Header name={'Home'} search={false} {...props} />
          ),
        }}
      />
      <HomeStack.Screen
        name="Search"
        component={SearchPage}
        options={{
          header: props => <Header name={'Home'} search={true} {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Product"
        component={Products}
        options={{
          header: props => <Header name={'Home'} search={true} {...props} />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreens;
