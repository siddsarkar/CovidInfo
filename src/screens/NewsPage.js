import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//custom
import WebViewComponent from '../components/WebViewComponent';
import AppHeader from '../components/AppHeader';
import NewsCards from './NewsPage/NewsCards';

const NewsStack = createStackNavigator();

export default function NewsPageNavigator() {
  return (
    <NewsStack.Navigator initialRouteName="main" headerMode="none">
      <NewsStack.Screen name="main" component={NewsPage} />
      <NewsStack.Screen name="article" component={WebViewComponent} />
    </NewsStack.Navigator>
  );
}

const NewsPage = ({navigation}) => (
  <>
    <AppHeader title="HEADLINES" alignment="center" />
    <NewsCards navigation={navigation} />
  </>
);
