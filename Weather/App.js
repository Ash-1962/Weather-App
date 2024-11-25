import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  BackHandler,
} from 'react-native';
import WelcomeIndex from './src/WelcomeIndex';
import WeatherPage from './src/WeatherPage';



const App = () => {
  const Stack = createNativeStackNavigator();
  const navigationRef = useNavigationContainerRef();



  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', function () {
      if (navigationRef && navigationRef.getCurrentRoute() && ['WeatherPage'].includes(navigationRef.getCurrentRoute().name)) {
        return true;
      }
      return false;
    });
  }, []);

  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator initialRouteName={"WelcomeIndex"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeIndex" component={WelcomeIndex} />
        <Stack.Screen name="WeatherPage" component={WeatherPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
