import React, { Component, useState, useEffect } from 'react';
import { Picker } from '@react-native-community/picker';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import { Divider } from 'react-native-elements';
import { material } from 'react-native-typography';
import Icon from 'react-native-vector-icons/Ionicons';

const GlobalPage = () => {
  const [Country, setCountry] = useState('set country');
  const [CountryListloading, setCountryListloading] = useState(true);
  const [CountryList, setCountryList] = useState([]);
  const [CountryDataloading, setCountryDataloading] = useState(true);
  const [CountryData, setCountryData] = useState([]);

  const getWidth = (min, max) => {
    if (CountryDataloading) {
      return '100%';
    } else {
      const num = Math.floor((min / max) * 100);
      const percent = num + '%';
      return percent;
    }
  };

  useEffect(() => {
    getCountrieslist();
  }, []);

  useEffect(() => {
    setCountryListloading(false);
  }, [CountryList]);

  const getCountrieslist = async () => {
    let res = await fetch('https://covid19.mathdro.id/api/countries/');
    let data = await res.json();
    setCountryList(data.countries);
  };

  const handlePicker = (country, index) => {
    setCountry(country);
  };

  useEffect(() => {
    getcountrydata();
  }, [Country]);

  useEffect(() => {
    setCountryDataloading(true);
  }, [CountryData]);

  const getcountrydata = async () => {
    if (Country == 'set country') {
      // let res = await fetch('https://covid19.mathdro.id/api/');
      // let data = await res.json();
      // setCountryData(data);
      setCountryDataloading(true);
      // console.log(data);
      // return null;
    } else {
      let res = await fetch(
        'https://covid19.mathdro.id/api/countries/' + Country,
      );
      let data = await res.json();
      setCountryData(data);
      // setCountryDataloading(false);
      console.log(data.confirmed.value);
    }
  };

  return (
    <View>
      <AppHeader title="Country-wise" />
      <Picker
        mode="dropdown"
        selectedValue={Country}
        style={{ width: '100%', ...material.title, fontSize: 24 }}
        onValueChange={(itemValue, itemIndex) =>
          handlePicker(itemValue, itemIndex)
        }>
        <Picker.Item label="set country" value="set country" />
        {CountryListloading
          ? null
          : CountryList.map((country) => (
              <Picker.Item
                key={country.name}
                label={country.name + '-' + country.iso2}
                value={country.name}
              />
            ))}
      </Picker>
      <ScrollView style={{ height: 500 }}>
        <TouchableOpacity //  Situation (Global)
          style={{
            // backgroundColor: '#CAD3C8',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            marginTop: 40,
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              paddingLeft: 20,
              justifyContent: 'space-between',
            }}>
            <Text style={{ ...material.display1, fontSize: 20 }}>
              <Text
                style={{
                  ...material.headline,
                  fontWeight: '700',
                  fontSize: 20,
                }}>
                Situation
              </Text>{' '}
              (Current)
            </Text>
            <Icon name="chevron-forward" size={30} color="#576574" />
          </View>
          <View style={{ marginBottom: 10 }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',

                padding: 5,
              }}>
              <Text style={material.subheading}>
                {' '}
                <Icon name="radio-button-on" color="green" /> Recovered
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 20,
                  ...material.subheading,
                }}>
                {CountryDataloading
                  ? 'DATA LOADING'
                  : JSON.stringify(CountryData.recovered.value)}
              </Text>
            </View>
            <View style={{ margin: 10, marginHorizontal: 20 }}>
              <Divider
                style={{
                  backgroundColor: 'white',
                  borderRadius: 5,
                  height: 10,
                  width: '100%',
                }}>
                <Divider
                  style={{
                    backgroundColor: 'green',
                    borderRadius: 5,
                    height: 10,
                    width: 50,
                  }}
                />
              </Divider>
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',

                padding: 5,
              }}>
              <Text style={material.subheading}>
                {' '}
                <Icon name="radio-button-on" color="red" /> Deaths
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 20,
                  ...material.subheading,
                }}>
                {CountryDataloading
                  ? 'DATA LOADING'
                  : JSON.stringify(CountryData.deaths.value)}
              </Text>
            </View>
            <View style={{ margin: 10, marginHorizontal: 20 }}>
              <Divider
                style={{
                  backgroundColor: 'white',
                  borderRadius: 5,
                  height: 10,
                  width: '100%',
                }}>
                <Divider
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 5,
                    height: 10,
                    width: 50,
                  }}
                />
              </Divider>
            </View>
          </View>
          <View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',

                padding: 5,
              }}>
              <Text style={material.subheading}>
                {' '}
                <Icon name="radio-button-on" color="yellow" /> Confirmed
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 20,
                  ...material.subheading,
                }}>
                {CountryDataloading
                  ? 'DATA LOADING'
                  : JSON.stringify(CountryData.confirmed.value)}
              </Text>
            </View>
            <View style={{ margin: 10, marginHorizontal: 20 }}>
              <Divider
                style={{
                  backgroundColor: 'white',
                  borderRadius: 5,
                  height: 10,
                  width: '100%',
                }}>
                <Divider
                  style={{
                    backgroundColor: 'yellow',
                    borderRadius: 5,
                    height: 10,
                    width: '100%',
                  }}
                />
              </Divider>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default GlobalPage;
