import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export function DrawerContent(props) {
  return (
    <View style={styles.drawer}>
      <Icon style={styles.icon} name="meh" size={100} color="#000" />

      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Root');
        }}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('News');
        }}>
        <Text style={styles.text}>News</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Search');
        }}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Global');
        }}>
        <Text style={styles.text}>Info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Time');
        }}>
        <Text style={styles.text}>Cases</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Tips');
        }}>
        <Text style={styles.text}>Tips</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Links');
        }}>
        <Text style={styles.text}>Links</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          BackHandler.exitApp();
        }}>
        <Text style={styles.text}>Exit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footertext}>
          Developed with Love{'  '}
          <Icon
            style={{ marginLeft: 20 }}
            name="heart"
            size={11}
            color="#000"
          />
        </Text>
        <Text style={styles.footertext}>by Siddhartth</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  links: {
    // backgroundColor: 'grey',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  text: {
    fontSize: 25,
    color: '#000',
  },
  icon: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 50,
  },
  footertext: {
    color: '#000',
    opacity: 0.5,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    width: '100%',
  },
});
