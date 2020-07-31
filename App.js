import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/screens/HomeScreen';
import StatsCard from './src/screens/StatsCard';
import {View} from 'react-native';
import NewsCards from './src/screens/NewsCards';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <HomeScreen></HomeScreen>;
  }
}
