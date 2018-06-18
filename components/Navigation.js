import React from 'react';
import { TabNavigator, Screen } from 'react-navigation';

// import components #######################################
import Insert from './insert.js';
import Home from './HomeScreen.js';
import SignUp from './SignupScreen.js';
import Photo from './photo.js';

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
      screen: Home,
    },
  SignUp: {
    screen: SignUp,
  },
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