import React from 'react';
import { TabNavigator, Screen } from 'react-navigation';
import Insert from './components/insert.js';
// import ReactNative from 'react-native';

import {
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableHighlight,
   } from 'react-native';




export default TabNavigator({
  Home: {
      screen: Insert,
    },
  Poop: {
    screen: Insert
  }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#666',
    },
  }
);
