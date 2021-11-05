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

import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Mapa from './screens/mapa'
import Perfil from './screens/perfil'
import Login from './screens/login'

export default function App() {
  return (
    <View style={styles.container}>
     <Login/>
     
    </View>
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