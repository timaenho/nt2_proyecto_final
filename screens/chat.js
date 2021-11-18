import { StatusBar } from 'expo-status-bar';
import io from "socket.io-client"
import { View, Platform, KeyboardAvoidingView,StyleSheet } from 'react-native';
import React, {useState,useEffect, useRef, useContext} from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import GlobalContext, { authData } from '../components/context'
import { useDispatch } from 'react-redux';
// 192.168.0.1
// 172.20.176.1

export default function App() {
const[recMessages, setRecMessages] =useState([])
const dispatch = useDispatch();
const {AuthData,setAuthData} = useContext(GlobalContext)
const [username, setUsername] = useState(AuthData.username)
const [avatar, setAvatar] = useState(AuthData.imagen)
const socket = useRef(null)

useEffect(() => {
  socket.current = io("https://1dd3-2800-810-53e-2dc-3cc5-e37b-d47a-6488.ngrok.io");
  socket.current.emit("join",username,avatar)
  dispatch({type:"server/join",data:{username: username, avatar:avatar}})
  socket.current.on("message",message =>{
  setRecMessages(prevState => GiftedChat.append(prevState, message))
  })

  /* return () => {
    socket.current.disconnect()
  } */
}, [])


  const onSend = (messages) => {
  console.log(messages)
    socket.current.emit("message", messages[0].text)
    setRecMessages(prevState=> GiftedChat.append(prevState,messages))
  }

return (
  
  <KeyboardAvoidingView
  // behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={styles.container}>
    <View style={{flex:1}}>
       
      {/*  {textOfRecievedMessage} */}
   
       <GiftedChat 
       renderUsernameOnMessage
       messages = {recMessages}
       onSend ={messages => onSend(messages)}
       user = {{
         _id:1
       }}    
       />
    
       {/* {
         Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding"/>
       }   */}
    </View>
    </KeyboardAvoidingView>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});
