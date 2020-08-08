import React from 'react';
import {StyleSheet, StatusBar, View, TextInput} from 'react-native';

const SearchBar = (props) => (
  <>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          textAlign="center"
          placeholder="search here"
          onChangeText={props.onChangeTextHandler}
          value={props.Value}
        />
      </View>
    </View>
  </>
);

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputWrapper: {
    width: '80%',
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightgrey',
  },
});
