import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from 'react-native-elements';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';

//import components
import SearchBar from '../components/SearchBar';
import SearchDetailsPage from './SearchPage/screens/SearchDetailsPage';

const SearchStack = createStackNavigator();

export default function SearchPageNavigator() {
  return (
    <SearchStack.Navigator initialRouteName="searchmain" headerMode="none">
      <SearchStack.Screen name="searchmain" component={SearchPage} />
      <SearchStack.Screen name="searchdetails" component={SearchDetailsPage} />
    </SearchStack.Navigator>
  );
}

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      DATA: [],
      SearchBarInput: '',
    };
  }

  componentDidMount() {
    this.makeRequest();
  }

  makeRequest = () => {
    this.setState(this.setState({ loading: true }), async () => {
      const API_URL = 'https://api.covid19india.org/data.json';
      let res = await fetch(API_URL);
      let info = await res.json();
      let data = info.statewise;
      this.setState({ DATA: data, loading: false });
    });
  };

  renderItem = ({ item }) => {
    if (this.state.loading) {
      return;
    } else {
      return (
        <Item
          item={item}
          onPress={() => {
            this.props.navigation.push('searchdetails', { data: item });
          }}
        />
      );
    }
  };

  getdata = () => {
    if (this.state.SearchBarInput == '') {
      console.log('nothing typed');
    } else {
      let matches = this.state.DATA.filter((items) => {
        let rgx = new RegExp(`^${this.state.SearchBarInput}`, 'gi');
        return items.state.match(rgx) || items.statecode.match(rgx);
      });
      matches.length === 0
        ? Alert.alert(
            'Sorry !',
            'No results found for "' + this.state.SearchBarInput + '"',
            [
              {
                text: 'Try Again',
                onPress: () => this.setState({ SearchBarInput: '' }),
                style: 'cancel',
              },
            ],
            { cancelable: true },
          )
        : this.setState({ DATA: matches });
    }
  };

  clearScreen = () => {
    this.state.SearchBarInput
      ? this.setState(this.setState({ SearchBarInput: '' }), () =>
          this.makeRequest(),
        )
      : null;
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <SearchBar
            clear={() => this.clearScreen()}
            search={() => this.getdata()}
            onChangeTextHandler={(text) =>
              this.setState({ SearchBarInput: text })
            }
            Value={this.state.SearchBarInput}
          />

          {this.state.loading ? (
            <View style={styles.activitycontainer}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          ) : (
            <FlatList
              data={this.state.DATA}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.lastupdatedtime}
            />
          )}
        </SafeAreaView>
      </>
    );
  }
}

const Item = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{item.state.substring(0, 30)}</Text>
    <Text style={styles.active}>{item.active}</Text>
    <Text style={styles.desc}>Active Cases</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    // backgroundColor: 'red',
  },
  activitycontainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  item: {
    width: '85%',
    height: 120,
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  active: {
    fontSize: 36,
    fontWeight: '900',
    alignSelf: 'center',
    // color: 'red',
  },
  title: {
    fontSize: 20,
    marginLeft: 12,
    alignSelf: 'center',
  },
  desc: {
    fontSize: 11,
    // color: 'grey',
    alignSelf: 'center',
  },
});

function compare(a, b) {
  if (a.state < b.state) {
    return -1;
  }
  if (a.state > b.state) {
    return 1;
  }
  return 0;
}

// const SearchPage = ({navigation}) => {
//   return (
//     <>
//       <AppHeader title="SEARCH" alignment="center" />
//     </>
//   );
// };

// class SearchPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: 'true',
//       Data: [],
//       SearchBarInput: '',
//       SearchedData: [],
//     };
//   }

//   componentDidMount() {
//     this.makeRequest();
//   }

//   makeRequest = () => {
//     this.setState(this.setState({loading: true}), async () => {
//       const API_URL = 'https://api.covid19india.org/data.json';
//       const res = await fetch(API_URL);
//       const info = await res.json();
//       const data = info.statewise;
//       this.setState({Data: data, loading: false});
//     });
//   };

//   render() {
//     return (
//       <>
//         <AppHeader title="SEARCH" alignment="center" />

//         {this.state.loading ? (
//           <View
//             style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <ActivityIndicator size="large" color="black" />
//           </View>
//         ) : (
//           <ScrollView style={{marginBottom: 10}}>
//             {this.state.Data.map((state) => (
//               <Card
//                 containerStyle={{
//                   borderWidth: 0,
//                   padding: 0,
//                   shadowColor: '#000',
//                   shadowOffset: {
//                     width: 0,
//                     height: 2,
//                   },
//                   shadowOpacity: 0.25,
//                   shadowRadius: 3.84,

//                   elevation: 5,
//                 }}
//                 key={state.statecode}>
//                 <Text
//                   style={{
//                     ...material.title,
//                     textAlign: 'center',
//                     padding: 5,
//                   }}>
//                   {state.state}-{state.statecode}
//                 </Text>
//                 <View
//                   style={{
//                     width: '100%',
//                     flexDirection: 'row',
//                     backgroundColor: 'lightyellow',
//                     padding: 5,
//                   }}>
//                   <Text style={material.subheading}>
//                     {' '}
//                     <Icon name="radio-button-on" color="red" /> Active
//                   </Text>
//                   <Text
//                     style={{
//                       position: 'absolute',
//                       top: 5,
//                       right: 5,
//                       ...material.subheading,
//                     }}>
//                     {state.active}
//                   </Text>
//                 </View>
//                 <View
//                   style={{
//                     width: '100%',
//                     flexDirection: 'row',
//                     backgroundColor: 'lightblue',
//                     padding: 5,
//                   }}>
//                   <Text style={material.subheading}>
//                     {' '}
//                     <Icon name="radio-button-on" color="red" /> Confirmed
//                   </Text>
//                   <Text
//                     style={{
//                       position: 'absolute',
//                       top: 5,
//                       right: 5,
//                       ...material.subheading,
//                     }}>
//                     {state.confirmed}
//                   </Text>
//                 </View>
//                 <View
//                   style={{
//                     width: '100%',
//                     flexDirection: 'row',
//                     backgroundColor: 'lightpink',
//                     padding: 5,
//                   }}>
//                   <Text style={material.subheading}>
//                     {' '}
//                     <Icon name="radio-button-on" color="red" /> Deaths
//                   </Text>
//                   <Text
//                     style={{
//                       position: 'absolute',
//                       top: 5,
//                       right: 5,
//                       ...material.subheading,
//                     }}>
//                     {state.deaths}
//                   </Text>
//                 </View>
//                 <View
//                   style={{
//                     width: '100%',
//                     flexDirection: 'row',
//                     backgroundColor: 'lightgreen',
//                     padding: 5,
//                   }}>
//                   <Text style={material.subheading}>
//                     {' '}
//                     <Icon name="radio-button-on" color="red" /> Recovered
//                   </Text>
//                   <Text
//                     style={{
//                       position: 'absolute',
//                       top: 5,
//                       right: 5,
//                       ...material.subheading,
//                     }}>
//                     {state.recovered}
//                   </Text>
//                 </View>
//                 <Text
//                   style={{
//                     textAlign: 'center',
//                     ...material.caption,
//                     fontStyle: 'italic',
//                     marginVertical: 2,
//                   }}>
//                   updated to: {state.lastupdatedtime}
//                 </Text>
//               </Card>
//             ))}
//           </ScrollView>
//         )}
//       </>
//     );
//   }
// }

// this.state.Data.map((state) => {
//     return (
//       <Card key={state.statecode} title={state.state}>
//         <View style={{width: '100%', flexDirection: 'row'}}>
//           <Text>Active</Text>
//           <Text style={{position: 'absolute', right: 0}}>
//             {state.active}
//           </Text>
//         </View>
//       </Card>
//     );
//   };
//   )

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
