import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { material } from 'react-native-typography';

const Header = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="menu" color="#000" size={40} />
        </TouchableOpacity>
        <View
          style={{
            flex: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{ ...material.headline, fontSize: 26, fontWeight: '600' }}>
            COVID-19
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="search" color="#000" size={35} />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
});
