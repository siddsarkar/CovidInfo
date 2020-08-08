import React, { Component } from 'react';
import { StatusBar, View, Dimensions, ScrollView, Text } from 'react-native';
import { material } from 'react-native-typography';
//custom
import Header from './RootPage/Header';
import InfoCards from './RootPage/InfoCards';
import MenuCards from './RootPage/MenuCards';

const { height, width } = Dimensions.get('window');

class RootPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <ScrollView style={{ backgroundColor: '#fff' }}>
          <Header />
          <ScrollView
            horizontal
            scrollEnabled
            pagingEnabled
            decelerationRate="fast"
            snapToInterval={330}
            contentContainerStyle={{
              // height: height / 4.5,
              height: 125,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              marginHorizontal: 10,
            }}>
            <InfoCards />
          </ScrollView>
          <View
            style={{
              paddingLeft: 10,
              backgroundColor: '#fff',
              height: 30,
              marginVertical: 10,
              marginBottom: 15,
            }}>
            <Text style={material.headline}>
              Hello,{' '}
              <Text style={{ ...material.headline, fontWeight: '700' }}>
                Siddharth Sarkar!
              </Text>
            </Text>
          </View>
          <View
            // scrollEnabled
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#fff',
              // height: height - 55 + 30 + height / 2.5,
              // backgroundColor: 'grey',
              display: 'flex',
            }}>
            <MenuCards navigation={navigation} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 55,
              marginVertical: 5,
              // backgroundColor: 'green',
            }}>
            <Text style={{ color: 'grey', ...material.caption }}>
              Designed and Developed By
            </Text>
            <Text style={{ color: 'grey', ...material.body1 }}>
              Siddharth@2020
            </Text>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default RootPage;
