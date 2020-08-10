import React from 'react';
import { StyleSheet, StatusBar, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const SearchBar = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <Icon
          onPress={navigation.goBack}
          name="keyboard-backspace"
          size={24}
          color="#000"
        />
        <View style={styles.inputWrapper}>
          <TextInput
            onSubmitEditing={props.search}
            returnKeyType="search"
            textAlign="center"
            placeholder="search here"
            onChangeText={props.onChangeTextHandler}
            value={props.Value}
          />
        </View>
        <Icon onPress={props.clear} name="delete" size={24} color="#000" />
      </View>
    </>
  );
};

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
    marginHorizontal: 10,
  },
});
