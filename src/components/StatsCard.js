import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-elements';

const StatsCard = (props) => (
  <View style={styles.statscard}>
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        height: 120,
      }}>
      <Text style={{color: 'grey', fontSize: 14}}>Your Location is</Text>
      <Text style={{fontSize: 54, fontWeight: '900', letterSpacing: 0}}>
        {props.data.statename}
      </Text>

      <Text style={{color: 'grey', fontSize: 11}}>{Date()}</Text>
    </View>
    <View style={styles.row}>
      <Card containerStyle={styles.card}>
        <Text style={styles.descText}>Active Cases:</Text>
        <Text style={styles.numCount}>{props.data.active}</Text>
      </Card>
      <Card containerStyle={styles.card}>
        <Text style={styles.descText}>Confirmed Cases:</Text>
        <Text style={styles.numCount}>{props.data.confirmed}</Text>
      </Card>
    </View>
    <View style={styles.row}>
      <Card containerStyle={styles.card}>
        <Text style={styles.descText}>Deaths:</Text>
        <Text style={styles.numCount}>{props.data.deaths}</Text>
      </Card>
      <Card containerStyle={styles.card}>
        <Text style={styles.descText}>Recovered:</Text>
        <Text style={styles.numCount}>{props.data.recovered}</Text>
      </Card>
    </View>
  </View>
);

export default StatsCard;
const styles = StyleSheet.create({
  statscard: {
    paddingBottom: 18,
    // backgroundColor: "pink"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
  card: {
    // backgroundColor: "#fad9c1",
    width: '45%',
    height: 70,
    borderRadius: 7,
    position: 'relative',
    padding: 0,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descText: {
    // backgroundColor: "red",
    position: 'absolute',
    left: 5,
  },
  numCount: {
    alignSelf: 'center',
    position: 'relative',
    bottom: -20,
    fontSize: 24,
  },
});
