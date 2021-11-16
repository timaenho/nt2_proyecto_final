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
const [username, setUsername] = useState(authData.username)
const [avatar, setAvatar] = useState(authData.imagen)

const socket = useRef(null)
useEffect(() => {
  socket.current = io("https://e5a6-2800-810-53e-2dc-a490-74bc-bb2f-6a2d.ngrok.io/");
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
