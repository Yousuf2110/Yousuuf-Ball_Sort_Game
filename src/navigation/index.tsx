import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN} from '../constants/screens';
import Home from '../screens/home';
import Level from '../screens/level';

const Stack = createNativeStackNavigator();

const RouteHandler = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREEN.HOME} component={Home} />
        <Stack.Screen name={SCREEN.LEVEL} component={Level} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteHandler;
