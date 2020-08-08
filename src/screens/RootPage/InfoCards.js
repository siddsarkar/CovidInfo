import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

const InfoCards = () => (
  <>
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        height: 125,
        //   backgroundColor: 'blue',
        borderWidth: 0,
        borderRadius: 7,
        width: 350,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
      }}>
      <Image
        resizeMode="cover"
        containerStyle={{
          width: '100%',
          height: '100%',
          borderRadius: 7,
          margin: 0,
          padding: 0,
        }}
        source={require('../../assets/index.jpeg')}
        PlaceholderContent={<ActivityIndicator />}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        margin: 0,
        padding: 0,
        height: 125,
        //   backgroundColor: '#3B3B98',
        borderWidth: 0,
        borderRadius: 7,
        width: 350,
        marginRight: 10,
      }}>
      <Image
        resizeMode="cover"
        containerStyle={{
          width: '100%',
          height: '100%',
          borderRadius: 7,
          margin: 0,
          padding: 0,
        }}
        source={{
          uri: 'https://dcmsme.gov.in/Awareness_corona/covid-19-banner.jpg',
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        margin: 0,
        padding: 0,
        height: 125,
        //   backgroundColor: 'grey',
        borderWidth: 0,
        borderRadius: 7,
        width: 350,
        marginRight: 10,
      }}>
      <Image
        resizeMode="cover"
        containerStyle={{
          width: '100%',
          height: '100%',
          borderRadius: 7,
          margin: 0,
          padding: 0,
        }}
        source={{
          uri:
            'https://glasscock.rice.edu/sites/default/files/COVID19%20Banner.jpg',
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
    </TouchableOpacity>
  </>
);

export default InfoCards;
