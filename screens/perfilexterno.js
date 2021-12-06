import { StatusBar } from 'expo-status-bar';
import React, {} from 'react';
import { StyleSheet, Button,Image, View, Text} from 'react-native';
import hombre from '../images/hombre-gorra-camara-1.jpg'


export default function perfilexterno({navigation, route}) {
    const userExt = route.params
    const usuario = {
        _id: 1,
        username: userExt.username,
        idiomaNativo: 'holandes',
        idiomaAaprender: userExt.descripction
    }
    return (
      
        <View style={styles.container}>
            <Image source= {{ uri: userExt.avatar}} style={{width: 200, height: 200 }}/>
            <StatusBar style= {'auto'}/>
            
            <Text style= {styles.textTitulo}>
                Username: {userExt.username}
            </Text>
            <Text style= {styles.text}>
                Idioma nativo: {userExt.descripcion}
                </Text >
            <Text style= {styles.text}>
                Idioma a aprender: {userExt.descripcion}
            </Text>
            <Button title="empezar a chatear!"
                onPress= {() => {
                
                navigation.navigate("Chat", userExt, {name: userExt.username})
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