import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Jogo from '../pages/Jogo';
import Login from '../pages/Login';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator>

  <MainStack.Screen name='Login' component={Login}/>
  <MainStack.Screen name='Jogo' component={Jogo}/>

  </MainStack.Navigator>
)