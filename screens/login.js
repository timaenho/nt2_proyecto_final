import React, {useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextPropTypes, TextInput } from 'react-native';



const Login = () => { 
    const [email, setEmail] = useState (null) 
    const [contraseña, setContraseña] = useState (null)
 
    return( 
    <View>

        <Text>Email</Text>
        <TextInput
        />
        <Text>Contraseña</Text>
        <TextInput
        />
      
    </View>
    )
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Login;
