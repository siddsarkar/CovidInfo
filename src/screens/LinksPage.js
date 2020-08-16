import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import AppHeader from '../components/AppHeader';

export default class LinksPage extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <AppHeader style={styles.header} title="Links" />
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.mohfw.gov.in/')}>
          <Text style={styles.linkText}>
            <Icon name="external-link" size={35} />
            https://www.mohfw.gov.in/
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.who.int/')}>
          <Text style={styles.linkText}>
            <Icon name="external-link" size={35} />
            https://www.who.int/
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.worldometers.info/coronavirus/')
          }>
          <Text style={styles.linkText}>
            <Icon name="external-link" size={35} />
            https://www.worldometers.info/coronavirus/
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://transformingindia.mygov.in/')
          }>
          <Text style={styles.linkText}>
            <Icon name="external-link" size={35} />
            https://transformingindia.mygov.in/
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.pmcares.gov.in/en/')}>
          <Text style={styles.linkText}>
            <Icon name="external-link" size={35} />
            https://www.pmcares.gov.in/en/
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 18,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});
