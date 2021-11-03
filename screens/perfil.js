import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextPropTypes, TextInput,TouchableOpacity } from 'react-native';
import UploadImage from '../components/uploadImage';
const usuario = {
    _id: 1,
    username: "Moon_Krater",
    edad: 32,
    idiomaNativo: 'holandes',
    idiomaAaprender: 'español'
}

export default function Perfil() {
    const [username, setUsername] = useState (null) 
    const [edad, setEdad] = useState (null)
    const [idiomaNativo, setIdiomaNativo] = useState(null)
    const [idiomaAaprender,setIdiomaAaprender] = useState (null)

    return (
        <View style={styles.container}>
                <UploadImage/>
        <TouchableOpacity>
            <Text style= {styles.textTitulo}>
                Username: {usuario.username}
            </Text>
            </TouchableOpacity>
        <TouchableOpacity>
            <Text style= {styles.text}>
                Edad: {usuario.edad}
                </Text>
                </TouchableOpacity>
        <TouchableOpacity>
            <Text style= {styles.text}>
                Idioma nativo: {usuario.idiomaNativo}
                </Text >
                </TouchableOpacity>
        <TouchableOpacity>
            <Text style= {styles.text}>
                Idioma a aprender: {usuario.idiomaAaprender}
                </Text>
                </TouchableOpacity>
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