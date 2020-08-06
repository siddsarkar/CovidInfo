import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {material} from 'react-native-typography';

const AppHeader = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="chevron-back" color="#000" size={40} />
        </TouchableOpacity>
        <View
          style={{
            flex: 6,
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginRight: 20,
          }}>
          <Text style={{...material.headline, fontSize: 26, fontWeight: '600'}}>
            {props.title}
          </Text>
        </View>
        {/* <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="notifications-outline" color="#000" size={35} />
        </View> */}
      </View>
    </>
  );
};
export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

// import React from 'react';
// import Icon from 'react-native-vector-icons/dist/AntDesign';
// import {Text, Avatar} from 'react-native-elements';
// import {StyleSheet, StatusBar, View} from 'react-native';

// const header = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <View style={styles.container}>
//         <Avatar rounded title="C9" containerStyle={styles.avatar} />
//         <Text style={styles.title}>COVID-19</Text>
//         <View style={styles.search}>
//           <Icon name="search1" size={20} color="#000" />
//         </View>
//       </View>
//     </>
//   );
// };

// export default header;

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: 50,
//     // backgroundColor: '#fff',
//     justifyContent: 'flex-start',
//     flexDirection: 'row',
//     alignItems: 'center',
//     // shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     elevation: 5,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: '200',
//     // color: '#000',
//   },
//   search: {
//     position: 'absolute',
//     right: 0,
//     marginHorizontal: 12,
//   },
//   avatar: {
//     // backgroundColor: '#000',
//     marginHorizontal: 10,
//   },
// })
