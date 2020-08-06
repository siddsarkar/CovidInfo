import React from 'react';
//import react in our code.
import {StyleSheet, View, Text} from 'react-native';
// import all basic components
// import Pie from 'react-native-pie';
// // import pie to make pie chart

export default function ShareScreen() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  gauge: {
    position: 'absolute',
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});
