import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import Mapa from './screens/mapa'
import Perfil from './screens/perfil'
import Login from './screens/login'
import Chat from './screens/chat'
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/signup';
import GlobalContext, { authData } from './components/context'
import PerfilExt from './screens/perfilexterno'



export default function App() {

  const [AuthData, setAuthData] = useState(GlobalContext)

  const isAuthenticated = ()=> AuthData.username !== undefined

  console.log(isAuthenticated())
  console.log(AuthData)
  
  const Stack = createStackNavigator()

  /* return (
    <GlobalContext.Provider value={{AuthData, setAuthData}}>
    <NavigationContainer>
      {
        (isAuthenticated())    ?
        <Stack.Navigator>
            <Stack.Screen name ={'Perfil'} component = {Perfil}/>
           <Stack.Screen name = {'Mapa'} component = {Mapa}/>
            <Stack.Screen name = {'Signup'} component = {Signup}/>
          </Stack.Navigator>    :
          <Stack.Navigator>
         {/*  <Stack.Screen name = {'Login'} component={Login}/> */
  //        <Stack.Screen name = {'Chat'} component = {Chat}/>
  //       </Stack.Navigator>
  //     }  
  //   </NavigationContainer>
  //   </GlobalContext.Provider>
  // ); */
 

  return (
    <GlobalContext.Provider value={{AuthData, setAuthData}}>
    <NavigationContainer>
     
        <Stack.Navigator>
        {/* <Stack.Screen name = {'Mapa'} component={Mapa}/> */}
        <Stack.Screen name = {'PerfilExt'} component={PerfilExt}/>
        <Stack.Screen name = {'Chat'} component = {Chat}/>
        <Stack.Screen name = {'Signup'} component = {Signup}/>
        <Stack.Screen name ={'Perfil'} component = {Perfil}/>
        <Stack.Screen name = {'Login'} component={Login}/>
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