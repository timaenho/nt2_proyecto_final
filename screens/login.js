
import React, {useState} from 'react';
import { StyleSheet, Button, View, Text, TextInput,Image, TouchableOpacity } from 'react-native';
import logo from '../images/logo.png'
import * as Google from 'expo-google-app-auth';

const Login = () => { 
    const [email, setEmail] = useState (null) 
    const [contraseña, setContraseña] = useState (null)
 
    return( 
      
    <View style= {styles.container}>
       <Image source= {logo} style={styles.logo}/>
        <TextInput 
        style ={styles.input}
        placeholder = 'Email'
        onChangeText={setEmail}

        />
        <TextInput 
        style ={styles.input}
         placeholder = 'Password'
         onChangeText={setContraseña}
        />
        <View style= {styles.containerButton}>
        <TouchableOpacity>
        <Text style = {styles.buttonText}>
           Login
          </Text>     
        </TouchableOpacity>
        </View> 
        <TouchableOpacity>
        <Text>Login con Google</Text>
        </TouchableOpacity>

        
    
           


      
    </View>
    )
    };

const styles = StyleSheet.create({
  buttonText:{
      fontSize: 17
  },
  logo:{
      height: 150,
      width:350,
      resizeMode:"contain"
  },
  containerButton:{
    padding: 15,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'blue',
    width: 350
    
  },
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container:{
    padding: 30,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'white'
},
  title: {
    textAlign: 'center',
    marginVertical: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
 
  
});

export default Login;
