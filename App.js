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
import React, {useState, useContext,useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Mapa from './screens/mapa'
import Perfil from './screens/perfil'
import Login from './screens/login'
import Chat from './screens/chat'
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/signup';
import GlobalContext, { authData } from './components/context'

export default function App() {

  

  const [AuthData, setAuthData] = useState(GlobalContext)

  const isAuthenticated = ()=> AuthData.username !== undefined

  console.log(isAuthenticated())
  console.log(AuthData)
  
  const Stack = createStackNavigator()

  return (
     <GlobalContext.Provider value={{AuthData, setAuthData}}>
    <NavigationContainer>
      {
        (!isAuthenticated())    ?
        <Stack.Navigator>
            <Stack.Screen name = {'Chat'} component = {Chat}/>
            <Stack.Screen name ={'Perfil'} component = {Perfil}/>
            <Stack.Screen name = {'Mapa'} component = {Mapa}/>
            <Stack.Screen name = {'Signup'} component = {Signup}/>
          </Stack.Navigator>    :
          <Stack.Navigator>
          <Stack.Screen name = {'Login'} component={Login}/>
        </Stack.Navigator>
      }  
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