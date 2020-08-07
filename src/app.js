// backup
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TransitionPresets} from '@react-navigation/stack';

//import Screens
import RootPage from './screens/RootPage';
import NewsPageNavigator from './screens/NewsPage';

SplashScreen.hide();
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
      {/* <MainStack.Screen name="Stats" component={StatsPage}/> */}
      {/* <MainStack.Screen name="Measures" component={MeasuresPage}/> */}
      {/* <MainStack.Screen name="Hospitals" component={HospitalsPage}/> */}
      {/* <MainStack.Screen name="Search" component={SearchPage}/> */}
      {/* <MainStack.Screen name="Links" component={LinksPage}/> */}
    </MainStack.Navigator>
  );
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function App() {
  const [initRender, setInitRender] = useState(true);

  useEffect(() => {
    setInitRender(false);
  }, [initRender]);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MainPageNavigator"
        drawerStyle={{width: initRender ? null : '70%'}}>
        <Drawer.Screen name="MainPageNavigator" component={MainPageNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
