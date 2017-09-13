import React from 'react';
import { TabNavigator, Screen } from 'react-navigation';
import Insert from './components/insert.js';
import SignUp from './components/signup.js';
import Photo from './components/photo.js';
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
  // Home: {
  //     screen: Insert,
  //   },
  // SignUp: {
  //   screen: SignUp,
  // },
  Photo: {
    screen: Photo,
  },
  },

  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#666',
    },
  }
);
