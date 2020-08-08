import React from 'react';
import { SafeAreaView, View, FlatList, Image, Dimensions } from 'react-native';
import AppHeader from '../components/AppHeader';
const { height, width } = Dimensions.get('window');

import { DATA } from '../assets/TipsData';

// const Item = ({ title }) => (
//   <View>
//     <Text>{title}</Text>
//   </View>
// );

const TipsPage = () => {
  const renderItem = ({ item }) => (
    <View>
      <Image
        resizeMode="contain"
        source={item.source}
        style={{ height, width, backgroundColor: '#fff' }}
      />
    </View>
  );

  return (
    <SafeAreaView style={{ height, width }}>
      <AppHeader title="Safety Tips" />
      <FlatList
        style={{ position: 'absolute', zIndex: -9999 }}
        horizontal
        pagingEnabled
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default TipsPage;
