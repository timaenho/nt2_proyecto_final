import { StatusBar } from 'expo-status-bar';
import io from "socket.io-client"
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState, useContext,useEffect, useRef} from 'react';

// 192.168.0.1
// 172.20.176.1

export default function App() {
const[messageToSend, setMessageToSend] = useState("")
const[recMessages, setRecMessages] =useState([])
const socket = useRef(null)
useEffect(() => {
  socket.current = io("http://localhost:3000");
  socket.current.on("message",message =>{
    setRecMessages(prevState => [...prevState,message])
  })
  
  return () => {
    socket.current.disconnect()
  }
}, [])

const textOfRecievedMessage = recMessages.map(msg => (
<Text key ={msg}>{msg}</Text> 
 ))

  const sendMessage = () => {
    socket.current.emit("message", messageToSend)
    setMessageToSend("")
  }
  
  return (
    <View style={styles.container}>
       <Text>Chat</Text> 
       {textOfRecievedMessage}
       <TextInput 
       value={messageToSend} 
       onChangeText={text => setMessageToSend(text)}
       placeholder ="Enter chat message..."
       onSubmitEditing={sendMessage}/>
       
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        alignItems:"center",
        justifyContent:"center"
    }
})