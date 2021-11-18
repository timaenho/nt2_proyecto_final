import { StatusBar } from 'expo-status-bar';
import React, {useState,useContext} from 'react';
import { StyleSheet, Button, View, Text,TouchableOpacity } from 'react-native';
import UploadImage from '../components/uploadImage';
import GlobalContext from "../components/context"
import IdiomaPicker from "../components/idiomaPicker"

const usuario = {
    _id: 1,
    username: "Moon_Krater",
    edad: 32,
    idiomaNativo: 'holandes',
    idiomaAaprender: 'español'
}

export default function Perfil({navigation, route}) {

    const {AuthData,setAuthData} = useContext(GlobalContext)
    const {nombre, setNombre} = useState(AuthData.username)
   
    //const {usuario} = route.params || {usuario: ''}
    

    return (
      
        <View style={styles.container}>
            <StatusBar style= {'auto'}/>
                <UploadImage/>
        <TouchableOpacity>
            <Text style= {styles.textTitulo}>
                Username: {AuthData.username}
            </Text>
            </TouchableOpacity>
             <Text style= {styles.text}>
                Idioma nativo: 
                </Text > 
                <IdiomaPicker esNativo={true}/>
           <Text style= {styles.text}>
                Idioma a aprender: 
                </Text> 
                <IdiomaPicker esNativo={false}/>
         <Button title="Logout"
        onPress= {() => {
            setAuthData({})
        }}/>
        <Button title="Buscar personas"
        onPress= {() => {
       
            navigation.navigate("Mapa") 
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