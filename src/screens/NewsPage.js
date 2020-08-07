import {View, Text, ScrollView, ActivityIndicator, Switch} from 'react-native';
import React, {Component, useState} from 'react';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
//custom
import WebViewComponent from '../components/WebViewComponent';
import AppHeader from '../components/AppHeader';
import NewsCards from './NewsPage/NewsCards';
import {material} from 'react-native-typography';
import {Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

const NewsStack = createStackNavigator();

export default function NewsPageNavigator() {
  return (
    <NewsStack.Navigator initialRouteName="main" headerMode="none">
      <NewsStack.Screen name="main" component={NewsPage} />
      <NewsStack.Screen name="article" component={WebViewComponent} />
    </NewsStack.Navigator>
  );
}

const NewsPage = ({navigation}) => {
  return (
    <>
      <AppHeader title="HEADLINES" alignment="center" />
      <NewsCards navigation={navigation} />
    </>
  );
};
