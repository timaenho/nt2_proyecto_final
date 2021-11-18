import { StatusBar } from 'expo-status-bar';
import React, {} from 'react';
import { StyleSheet, Button,Image, View, Text} from 'react-native';


import GlobalContext from "../components/context"

import hombre from '../images/hombre-gorra-camara-1.jpg'


export default function perfilexterno({navigation, route}) {
    const usuario = {
        _id: 1,

        username: "Moon_Krater",
        idiomaNativo: 'holandes',
        idiomaAaprender: 'español'
    }
    return (
      
        <View style={styles.container}>
            <Image source= {hombre} style={{width: 200, height: 200 }}/>
            <StatusBar style= {'auto'}/>
            
            <Text style= {styles.textTitulo}>
                Username: {usuario.username}
            </Text>
            <Text style= {styles.text}>
                Idioma nativo: {usuario.idiomaNativo}
                </Text >
            <Text style= {styles.text}>
                Idioma a aprender: {usuario.idiomaAaprender}
            </Text>
            <Button title="empezar a chatear!"
                onPress= {() => {
                
                navigation.navigate("Chat")
            }}/>
        </View>
    )}

    const styles = StyleSheet.create({
        container:{
            padding: 30,
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: 'white'
        },
        textTitulo:{
            marginVertical:20,
            fontSize:18
        },
        text:{
            marginVertical:5,
            fontSize:14
        }
    })