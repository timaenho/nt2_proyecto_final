import {Picker} from '@react-native-picker/picker';
import React, {useState,useContext} from 'react';
import { StyleSheet } from 'react-native';
import GlobalContext from "../components/context";

export default function IdiomaPicker({esNativo}) {
    const {AuthData,setAuthData} = useContext(GlobalContext)
    const handleValueChange=(itemValue, itemIndex) => 
    {esNativo ?
        setAuthData({...AuthData, idiomaNativo: itemValue})
             :
        setAuthData({...AuthData, idiomaAaprender: itemValue}
            )}
    return (
  
            <Picker 
                mode= {'dropdown'}
                style={styles.pickerStyles}
                selectedValue={
                    esNativo ? AuthData.idiomaNativo : AuthData.idiomaAaprender}
                onValueChange={handleValueChange}>
                <Picker.Item label="Español" value="Español" />
                <Picker.Item label="Holandés" value="Holandés" />
                <Picker.Item label="Francés" value="Francés" />
                <Picker.Item label="Inglés" value="Inglés" />
            </Picker>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pickerStyles:{
        
        width:'70%',
        backgroundColor:'white',
        color:'black'
    }
  });