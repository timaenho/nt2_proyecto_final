
import { View,KeyboardAvoidingView,StyleSheet } from 'react-native';
import React, {useState,useEffect, useRef, useContext} from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import { useDispatch, useSelector } from 'react-redux';

Chat.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam("name")
})
export default function Chat ({route, navigation}) {
const userExt = route.params
const userExtId = userExt.userId 
const selfUser = useSelector(state=>state.selfUser)
const conversations = useSelector(state => state.conversations);
const messages = conversations[userExtId].messages
console.log(messages)
const dispatch = useDispatch();

return (
  
  <KeyboardAvoidingView
  // behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={styles.container}>
    <View style={{flex:1}}>
       
      {/*  {textOfRecievedMessage} */}
   
       <GiftedChat 
       renderUsernameOnMessage
       messages = {messages}
       onSend ={messages => 
        {
        dispatch({
          type: "private_message", 
          data: {message: messages[0], conversationId: userExtId}
        })
        dispatch({
          type:"server/private_message",
          data: {message: messages[0], conversationId: userExtId}
        })
       }
      }
       user = {{
         _id: selfUser.userId
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
