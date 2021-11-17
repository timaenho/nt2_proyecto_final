import {Picker} from '@react-native-picker/picker';
import React, {useState,useContext} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextPropTypes, TextInput,TouchableOpacity } from 'react-native';
import GlobalContext from "../components/context";

export default function idiomaPicker() {
    const {AuthData,setAuthData} = useContext(GlobalContext)
    const handleValueChange=(itemValue, itemIndex) =>setAuthData({...AuthData, idiomaNativo: itemValue})
    return (
        
   
            
            <Picker 
                mode= {'dropdown'}
                
                style={styles.pickerStyles}
                selectedValue={AuthData.idiomaNativo}
                onValueChange={handleValueChange}>
                <Picker.Item label="Español" value="Español" />
                <Picker.Item label="Holandes" value="Holandes" />
                <Picker.Item label="Frances" value="Frances" />
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