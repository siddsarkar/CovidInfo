/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/screens/HomeScreen';
import StatsCard from './src/screens/StatsCard';
import { View } from 'react-native';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <HomeScreen />
    );
  }
}
