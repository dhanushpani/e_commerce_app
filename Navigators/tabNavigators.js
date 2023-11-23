/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BOTTOM_NAVBARS} from '../utility/constants/bottomNavbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/header';

const MainStack = createBottomTabNavigator();

const MainStackScreens = () => {
  return (
    <MainStack.Navigator
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
      {BOTTOM_NAVBARS.map(item => (
        <MainStack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            headerTitle: props => (
              <Header name={item.name} search={false} {...props} />
            ),
            tabBarIcon: ({color, size}) => (
              <Icon name={item.icon} color={color} size={size} />
            ),
            tabBarActiveTintColor: '#03045e',
            tabBarLabelStyle: {fontSize: 12},
          }}
        />
      ))}
    </MainStack.Navigator>
  );
};

export default MainStackScreens;
