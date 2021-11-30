import { StatusBar } from 'expo-status-bar';
import React, {useState,useContext} from 'react';
import { StyleSheet, Button, View,ScrollView,SafeAreaView, Text,TouchableOpacity } from 'react-native';
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
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <StatusBar style= {'auto'}/>
                
            <View style={styles.cont}><UploadImage /></View>
            <Text style= {styles.textTitulo}>
                Username: {AuthData.username}
            </Text>
        
             <Text style= {styles.text}>
                Idioma nativo: 
                </Text > 
                <IdiomaPicker esNativo={true}/>
           <Text style= {styles.text}>
                Idioma a aprender: 
                </Text> 
                <IdiomaPicker esNativo={false} />
                
                <View style={styles.cont}>
                    <Button 
                    title="Buscar personas"
                    
                    style= {styles.buttons}
                    onPress= {() => {
                
                        navigation.navigate("Mapa") 
                    }}/>
                </View>
                <View style={{marginVertical:20}}></View>
                <View style={styles.logout}>
                    <Button title="Logout"
                    onPress= {() => {
                        setAuthData({})
                    }}/>
                </View>
                <View style={{marginVertical:20}}></View>
        </ScrollView>
        </SafeAreaView>
        
    )}

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            paddingTop: StatusBar.currentHeight
            
        },
        textTitulo:{
            textAlign:'center',
            marginVertical:20,
            fontSize:18
        },
        cont:{
            marginVertical:20,
            alignContent: 'center',
            margin:100            
        },
        logout:{
            marginVertical:10,
            alignContent: 'center',
            margin:80            
        },
        text:{
            fontSize:16,
            textAlign:'center'
        },
        buttons:{
            margin:100,
            textAlign:'center'
        },
        scrollView: {
            
            backgroundColor: 'white'
        },
    })