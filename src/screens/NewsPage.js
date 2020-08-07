import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import React, {Component} from 'react';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
//custom
import AppHeader from '../components/AppHeader';
import NewsCards from './NewsPage/NewsCards';
import {material} from 'react-native-typography';
import {Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const NewsStack = createStackNavigator();

function NewsStackNavigator() {
  return (
    <NewsStack.Navigator initialRouteName="Main">
      <NewsStack.Screen name="Main" component={NewsPage} />
      <NewsStack.Screen name="Article" component={WebViewComponent} />
    </NewsStack.Navigator>
  );
}

const NewsPage = () => {
  return (
    <>
        <AppHeader title={'NEWS'} />
        <View style={{left: 10, top: 10}}>
          <Text style={material.headline}>
            {' '}
            <Icon name="trending-up" size={24} /> TRENDING TODAY
          </Text>
        </View>
        <ScrollView>
          <NewsCards />
        </ScrollView>
      </>
    );
  }
}

export default NewsPage;
