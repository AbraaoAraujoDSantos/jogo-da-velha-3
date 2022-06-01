import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login';
import Principal from './pages/Jogo';

import MainStack from './navigations/MainStack';

export default function App(){
  return (
    <NavigationContainer>
    <MainStack/>
    </NavigationContainer>
  );
}