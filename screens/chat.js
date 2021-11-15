import { StatusBar } from 'expo-status-bar';
import io from "socket.io-client"
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import React, {useState,useEffect, useRef, useContext} from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import GlobalContext, { authData } from '../components/context'
// 192.168.0.1
// 172.20.176.1

export default function App() {
const[recMessages, setRecMessages] =useState([])
const [username, setUsername] = useState(authData.username)


const socket = useRef(null)
useEffect(() => {
  socket.current = io("http://localhost:3000");
  socket.current.emit("join",username)
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
    <View style={{flex:1}}>
       
      {/*  {textOfRecievedMessage} */}
       <GiftedChat 
       renderUsernameOnMessage
       messages = {recMessages}
       onSend = {messages => onSend(messages)}
       user = {{
         _id:1
       }}    
       />
       {
         Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding"/>
       }  
    </View>
)
}

