import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { material } from 'react-native-typography';

const AppHeader = (props) => {
  const navigation = useNavigation();
  const align = props.alignment ? props.alignment : 'center';
  return (
    <>
      <View
        {...props}
        style={{
          height: 55,
          backgroundColor: '#fff',
          justifyContent: 'center',
          ...props.style,
        }}>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{
            // flex: 1,
            position: 'absolute',
            left: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="chevron-back" color="#000" size={40} />
        </TouchableOpacity>
        <View
          style={{
            // flex: 6,
            width: '100%',
            justifyContent: 'center',
            alignItems: align,
            marginRight: 20,
          }}>
          <Text
            style={{ ...material.headline, fontSize: 26, fontWeight: '600' }}>
            {props.title || 'WEBVIEW'}
          </Text>
        </View>
      </View>
    </>
  );
};
export default AppHeader;
