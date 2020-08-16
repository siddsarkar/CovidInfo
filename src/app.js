// backup
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import Screens
import RootPage from './screens/RootPage';
import NewsPageNavigator from './screens/NewsPage';
import SearchPageNavigator from './screens/SearchPage';
import TimeSeriesPage from './screens/TimeSeriesPage';
import GlobalPage from './screens/GlobalPage';
import TipsPage from './screens/TipsPage';
import LinksPage from './screens/LinksPage';
import { DrawerContent } from './Drawer/DrawerContent';

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();

function MainPageNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="Root"
      headerMode="none"
      // screenOptions={{...TransitionPresets.SlideFromRightIOS}}
    >
      <MainStack.Screen name="Root" component={RootPage} />
      <MainStack.Screen name="News" component={NewsPageNavigator} />
      <MainStack.Screen name="Search" component={SearchPageNavigator} />
      <MainStack.Screen name="Global" component={GlobalPage} />
      <MainStack.Screen name="Time" component={TimeSeriesPage} />
      <MainStack.Screen name="Tips" component={TipsPage} />
      <MainStack.Screen name="Links" component={LinksPage} />
    </MainStack.Navigator>
  );
}

export default function App() {
  const [initRender, setInitRender] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
    setInitRender(false);
  }, [initRender]);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MainPageNavigator"
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerStyle={{ width: initRender ? null : '70%' }}>
        <Drawer.Screen name="MainPageNavigator" component={MainPageNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
