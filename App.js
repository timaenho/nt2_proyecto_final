/* import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import Mapa from './screens/mapa';

export default function App() {
  return (
    <View>
       <Mapa/>
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */

//#2121F9 --> azul
//#F2EADF --> blanco
//#F05F42 --> naranja

import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Mapa from './screens/mapa'
import Perfil from './screens/perfil'
import Login from './screens/login'
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/signup';
import GlobalContext from './components/context'

export default function App() {


  const isAuthenticated = ()=> AuthData.nombre !== undefined

  const [AuthData, setAuthData] = useState({})
  
  const Stack = createStackNavigator()

  return (
    <GlobalContext.Provider value={{AuthData, setAuthData}}>
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = {'Login'} component={Login}/>
            <Stack.Screen name ={'Perfil'} component = {Perfil}/>
            <Stack.Screen name = {'Mapa'} component = {Mapa}/>
            <Stack.Screen name = {'Signup'} component = {Signup}/>
          </Stack.Navigator>
    </NavigationContainer>
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});