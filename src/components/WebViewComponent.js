import React from 'react';
import {WebView} from 'react-native-webview';
import AppHeader from './AppHeader';

export default function WebViewComponent({navigation, route}) {
  const {url} = route.params;
  return (
    <>
      <AppHeader />
      <WebView source={{uri: url}} />
    </>
  );
}
