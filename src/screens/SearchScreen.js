// import React, {Component} from 'react';
// import {
//   SafeAreaView,
//   Text,
//   FlatList,
//   StyleSheet,
//   View,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';

// //import components
// import SearchBar from '../components/SearchBar';
// import {Card} from 'react-native-elements';

// class SearchScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       DATA: [],
//       SearchBarInput: '',
//       SearchedData: [],
//     };
//   }

//   componentDidMount() {
//     this.makeRequest();
//   }

//   makeRequest = async () => {
//     const API_URL = 'https://api.covid19india.org/data.json';
//     let res = await fetch(API_URL);
//     let info = await res.json();
//     let data = info.statewise;
//     this.setState({DATA: data});
//     this.getdata(data);
//   };

//   renderItem = ({item}) => {
//     return (
//       <Item
//         item={item}
//         onPress={() => {
//           this.props.navigation.push('SearchDetails', {
//             data: item,
//             id: item.active,
//           });
//         }}
//       />
//     );
//   };

//   getdata = () => {
//     console.log(this.state.SearchBarInput);
//     if (this.state.SearchBarInput == '') {
//       this.setState({SearchedData: this.state.DATA});
//     } else {
//       let matches = this.state.DATA.filter((items) => {
//         let rgx = new RegExp(`^${this.state.SearchBarInput}`, 'gi');
//         return items.state.match(rgx) || items.statecode.match(rgx);
//       });
//       this.setState({SearchedData: matches});
//     }
//   };

//   searchBarHandler = (text) => {
//     this.setState({SearchBarInput: text});
//   };

//   render() {
//     return (
//       <>
//         <SafeAreaView style={styles.container}>
//           <SearchBar
//             onChangeTextHandler={this.searchBarHandler}
//             // onSubmitHandler={getdata}
//             Value={this.state.SearchBarInput}
//           />

//           <FlatList
//             data={this.state.SearchedData}
//             renderItem={this.renderItem}
//             keyExtractor={(item) => item.id}
//           />
//         </SafeAreaView>
//       </>
//     );
//   }
// }

// export default SearchScreen;
// const Item = ({item, onPress}) => (
//   <TouchableOpacity onPress={onPress}>
//     <Text style={styles.title}>{item.state.substring(0, 30)}</Text>
//     <Text style={styles.active}>{item.active}</Text>
//     <Text style={styles.desc}>Active Cases</Text>
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     width: '85%',
//     height: 120,
//     alignSelf: 'center',
//   },
//   active: {
//     fontSize: 36,
//     fontWeight: '900',
//     alignSelf: 'center',
//     // color: 'red',
//   },
//   title: {
//     fontSize: 20,
//     marginLeft: 12,
//     alignSelf: 'center',
//   },
//   desc: {
//     fontSize: 11,
//     // color: 'grey',
//     alignSelf: 'center',
//   },
// });

// function compare(a, b) {
//   if (a.state < b.state) {
//     return -1;
//   }
//   if (a.state > b.state) {
//     return 1;
//   }
//   return 0;
// }
