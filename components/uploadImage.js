import React, { useState, useEffect, useContext } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import GlobalContext, { authData } from '../components/context'

export default function UploadImage() {
  const {AuthData,setAuthData} = useContext(GlobalContext)
  const [image, setImage] = useState(null);
  /* //const addImage=()=>{}; */
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });
    console.log(JSON.stringify(_image))

    if(!_image.cancelled){
        setImage(_image.uri)
    }
    setAuthData({...AuthData,
        imagen: _image.uri
      }) 
    console.log(AuthData)
  };
 
  return (
            <View style={imageUploaderStyles.container}>
                {
                    image  && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                }
                    
                    <View style={imageUploaderStyles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                            <Text>{image ? 'Editar' : 'Subir'} Avatar</Text>
                            <AntDesign name="camera" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
            </View>
   
  );
}

const imageUploaderStyles=StyleSheet.create({
    container:{
        alignContent:'center',   

        elevation:2,
        height:300,
        width:200, 
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        alignContent:'center',
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'white',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        alignContent:'center',
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})