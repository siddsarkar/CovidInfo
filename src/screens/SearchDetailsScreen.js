import React from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {Text, Avatar, Button} from 'react-native-elements';
import {StyleSheet, StatusBar, View, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function SearchDetailsScreen({route, navigation}) {
  const {id} = route.params;
  const {data} = route.params;

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.headercontainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.avatar}>
            <Icon name="back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Back</Text>
        </View>
        <View style={styles.pageContent}>
          <Text>active: {JSON.stringify(data)}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headercontainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
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
  title: {
    fontSize: 20,
    fontWeight: '200',
    color: '#000',
  },
  avatar: {
    marginHorizontal: 18,
  },
  pageContent: {
    top: 50,
  },
});

// export default function SearchDetailsScreen({route, navigation}) {
//   const {id} = route.params;
//   const {data} = route.params;

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <Text>active: {JSON.stringify(data)}</Text> */}

//     </SafeAreaView>
//   );
// }
