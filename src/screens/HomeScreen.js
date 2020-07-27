import React, { Component } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { PERMISSIONS, request } from "react-native-permissions";

import {
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
    View,
    Platform,
    RefreshControl,
    ScrollView,
    StatusBar
} from 'react-native';

import {
    Header,
    Text,
    Card,
    Icon,
    Avatar,
    Divider
} from 'react-native-elements';
import StatsCard from './StatsCard';
import NewsCards from './NewsCards';



export default class HomeScreen extends Component {
    state = {
        refresh: false,
        location: {
            lat: '',
            lng: '',
        },
        covidDetails: {
            statename: '',
            active: '',
            confirmed: '',
            deaths: '',
            recovered: '',
        },
        loading: false,
    }

    componentDidMount() {
        this.setState(
            this.setState({ loading: true }),
            () => {
                try {
                    request(
                        Platform.select({
                            android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
                        })
                    ).then(res => {
                        if (res == "granted") {
                            Geolocation.getCurrentPosition(posi => {
                                // console.log(`Your posisition, Latitude:${posi.coords.latitude} Longitude:${posi.coords.longitude}`);
                                getStatename(posi);
                            });
                        } else {
                            alert("Location is not enabled");
                        }
                    });
                } catch (error) {
                    console.log("location set error:", error);
                }


                var getStatename = async (posi) => {
                    var lat = posi.coords.latitude;
                    var lng = posi.coords.longitude;
                    var res = await fetch(`https://www.mapquestapi.com/geocoding/v1/reverse?key=4AqHlYO2GfvAzIYT4NwAbvhz7Ch2uat5&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`);
                    var data = await res.json();
                    // console.log(`location got is : ${data.results[0].locations[0].adminArea3}`);
                    getStateData(data.results[0].locations[0].adminArea3);

                }

                var getStateData = async (information) => {
                    const API_URL = 'https://api.covid19india.org/data.json';
                    let res = await fetch(API_URL);
                    let info = await res.json();
                    let matches = info.statewise.filter((items) => {
                        let rgx = new RegExp(`^${information}`, 'gi');
                        return items.state.match(rgx) || items.statecode.match(rgx);
                    });
                    let match = matches[0];
                    if (match === undefined) {
                        alert('match not found')
                    } else {
                        // console.log(`data got is: ${match.state}, ${match.confirmed},${match.deaths}, ${match.recovered}`);
                        this.setState({
                            loading: false,
                            covidDetails: {
                                statename: match.state,
                                active: match.active,
                                confirmed: match.confirmed,
                                deaths: match.deaths,
                                recovered: match.recovered,
                            }
                        })
                    }
                }
            }
        )
    }

    getData = () => {
        this.setState(
            this.setState({ loading: true }),
            () => {
                try {
                    request(
                        Platform.select({
                            android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
                        })
                    ).then(res => {
                        if (res == "granted") {
                            Geolocation.getCurrentPosition(posi => {
                                // console.log(`Your posisition, Latitude:${posi.coords.latitude} Longitude:${posi.coords.longitude}`);
                                getStatename(posi);
                            });
                        } else {
                            alert("Location is not enabled");
                        }
                    });
                } catch (error) {
                    console.log("location set error:", error);
                }


                var getStatename = async (posi) => {
                    var lat = posi.coords.latitude;
                    var lng = posi.coords.longitude;
                    var res = await fetch(`https://www.mapquestapi.com/geocoding/v1/reverse?key=4AqHlYO2GfvAzIYT4NwAbvhz7Ch2uat5&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`);
                    var data = await res.json();
                    // console.log(`location got is : ${data.results[0].locations[0].adminArea3}`);
                    getStateData(data.results[0].locations[0].adminArea3);

                }

                var getStateData = async (information) => {
                    const API_URL = 'https://api.covid19india.org/data.json';
                    let res = await fetch(API_URL);
                    let info = await res.json();
                    let matches = info.statewise.filter((items) => {
                        let rgx = new RegExp(`^${information}`, 'gi');
                        return items.state.match(rgx) || items.statecode.match(rgx);
                    });
                    let match = matches[0];
                    if (match === undefined) {
                        alert('match not found')
                    } else {
                        // console.log(`data got is: ${match.state}, ${match.confirmed},${match.deaths}, ${match.recovered}`);
                        this.setState({
                            loading: false,
                            covidDetails: {
                                statename: match.state,
                                active: match.active,
                                confirmed: match.confirmed,
                                deaths: match.deaths,
                                recovered: match.recovered,
                            }
                        })
                    }
                }
            }
        )
    }

    render() {
        let preview;
        const loader = (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        )
        const dataView = (
            <Card titleStyle={styles.cardTitle} title='Latest Updates' containerStyle={styles.card}>
                <View style={styles.cardItems}>
                    <Text style={styles.cardItemsText}> State: {this.state.covidDetails.statename}</Text>
                </View>
                <View style={styles.cardItems}>
                    <Text style={styles.cardItemsText}> Active: {this.state.covidDetails.active}</Text>
                </View>
                <View style={styles.cardItems}>
                    <Text style={styles.cardItemsText}> Confirmed: {this.state.covidDetails.confirmed}</Text>
                </View>
                <View style={styles.cardItems}>
                    <Text style={styles.cardItemsText}> Deaths: {this.state.covidDetails.deaths}</Text>
                </View>
                <View style={styles.cardItems}>
                    <Text style={styles.cardItemsText}> Recovered: {this.state.covidDetails.recovered}</Text>
                </View>
            </Card>
        )

        if (this.state.loading) {
            preview = loader;
        } else {
            preview = dataView;
        }

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#a6dcef" />
                <Header barStyle="dark-content" containerStyle={styles.header}>
                    <Avatar
                        containerStyle={{ borderWidth: 2 }}
                        rounded

                        size="small"
                        source={require('../assets/pp.jpg')} />
                    <Text style={{ fontSize: 20, position: "relative", fontWeight: "700" }} >COVID-19 STATUS </Text>
                    <Icon name='search' type='ionicons'></Icon>
                </Header>
                <ScrollView
                    refreshControl={<RefreshControl refreshing={this.state.loading} onRefresh={this.getData} vertical />} >
                    <StatsCard load={this.state.loading} data={this.state.covidDetails} />
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ marginLeft: 10, fontSize: 24 }} >Latest News </Text>

                    </View>
                    <Divider></Divider>
                    <NewsCards></NewsCards>

                </ScrollView>
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'lightblue',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    card: {
        backgroundColor: "white"
    },
    cardTitle: {
        fontSize: 22,
    },
    cardItems: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    cardItemsText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: "#a6dcef",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 8,
    }
});