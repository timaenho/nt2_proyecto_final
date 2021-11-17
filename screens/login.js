import React, {useState, useContext} from 'react';
import { StyleSheet, View, Text, TextInput,Image, TouchableOpacity } from 'react-native';
import logo from '../images/logo.png'
import googleLogo from '../images/googleLogo.png'
import { StatusBar } from 'expo-status-bar';
import * as Google from 'expo-auth-session/providers/google'
import GlobalContext, { authData } from '../components/context'


//https://docs.expo.dev/versions/latest/sdk/auth-session/
//https://docs.expo.dev/versions/latest/sdk/auth-session/#google


const Login = ({navigation, route}) => { 
  /*------------------------------LOGIN CON GOOLE-------------------------------   */
    const [request, response, promptAsync] = Google.useAuthRequest({
      expoClientId: '356942231803-soaidq3thgt14vju4l94gefu1rnhj631.apps.googleusercontent.com',
      iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
      androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
      webClientId: '356942231803-soaidq3thgt14vju4l94gefu1rnhj631.apps.googleusercontent.com',
    });

    const {AuthData,setAuthData} = useContext(GlobalContext)

    React.useEffect(() => {
      if (response?.type === 'success') {
        const { authentication } = response;
        console.log('authentication Data', authentication)
        
        
        // llamar a la API de google para traerme info del usuario
        // https://www.googleapis.com/oauth2/v1/userinfo?access_token=$%7Bauthentication.accessToken%7D
      
        fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`)
        .then(res => res.json())
        .then(data=>{
          setAuthData({...authData,
            username: data.name,
            email: data.email,
            esOnline:true,
            imagen:data.picture
            
          })
        })
    
      }
    }, [response]);
  /*------------------------------{}-------------------------------   */
    console.log(route)

     const login = () => {
          console.log('Dentro la función de Login')
          navigation.navigate("Perfil")
     }
   /*   const signup = () => {
      console.log('Dentro la función de signup')
      navigation.navigate("Signup")
    }
    const [email, setEmail] = useState (null) 
    const [contraseña, setContraseña] = useState (null) */
 
    return( 
      
    <View style= {styles.container}>
      <StatusBar style = {'auto'}/>
       <Image source= {logo} style={styles.logo}/>
      {/*   <TextInput 
        style ={styles.input}
        placeholder = 'Email'
        onChangeText={setEmail} />

        <TextInput 
        style ={styles.input}
         placeholder = 'Password'
         onChangeText={setContraseña} />

        <View style= {styles.containerButtonAzul}>
        <TouchableOpacity onPress= {login}>
        <Text style = {styles.buttonText}>
           Login
          </Text>     
        </TouchableOpacity>
        </View> 

        <View style={styles.espacio}>
        </View>

        <View style= {styles.containerButtonNaranja}>
        <TouchableOpacity onPress= {signup}>
        <Text style = {styles.buttonText}>
           Signup
          </Text>     
        </TouchableOpacity>
        </View>  */}

        <TouchableOpacity 
        disabled ={!request} 
        onPress={()=> {
          promptAsync()
          }}> 
          <Image source= {googleLogo}  style= {styles.buttonGoogle} />
        </TouchableOpacity>
    </View>
    )
    };

const styles = StyleSheet.create({
  buttonText:{
      fontSize: 17
  },
  espacio:{
    padding:5
  },
  buttonGoogle:{
      height: 60,
      resizeMode:"contain",
      width:350,
      padding: 20
  },
  logo:{
      height: 150,
      width:350,
      resizeMode:"contain"
  },
  containerButtonAzul:{
    padding: 15,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#2121F9',
    width: 350
    
  },containerButtonNaranja:{
    padding: 15,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#F05F42',
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
